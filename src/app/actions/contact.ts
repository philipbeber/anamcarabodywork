"use server";

import {
  type SendEmailCommandInput,
  SendEmailCommand,
  SESv2Client,
} from "@aws-sdk/client-sesv2";
import { Resource } from "sst";

export type ContactFormState = {
  ok?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

const MAX_NAME_LEN = 200;
const MAX_MESSAGE_LEN = 10_000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: NonNullable<ContactFormState["errors"]> = {};

  if (!name) errors.name = ["Please enter your name."];
  else if (name.length > MAX_NAME_LEN)
    errors.name = [`Please use at most ${MAX_NAME_LEN} characters.`];

  if (!email) errors.email = ["Please enter your email."];
  else if (!EMAIL_RE.test(email))
    errors.email = ["Please enter a valid email address."];

  if (!message) errors.message = ["Please enter a message."];
  else if (message.length > MAX_MESSAGE_LEN)
    errors.message = [`Please keep your message under ${MAX_MESSAGE_LEN} characters.`];

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const client = new SESv2Client({});
  const to = Resource.ContactInbox.value;
  const from = Resource.OutboundSender.value;

  const input: SendEmailCommandInput = {
    FromEmailAddress: from,
    ReplyToAddresses: [email],
    Destination: { ToAddresses: [to] },
    Content: {
      Simple: {
        Subject: { Data: `Website inquiry from ${name}` },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          },
        },
      },
    },
  };

  try {
    await client.send(new SendEmailCommand(input));
  } catch (err) {
    console.error("submitContact SES error", err);
    return {
      message:
        "We could not send your message right now. Please try again in a few minutes.",
    };
  }

  return {
    ok: true,
    message: "Thank you — we'll get back to you soon.",
  };
}
