"use client";

import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactFormState = {};

const fieldClass =
  "mt-2 w-full rounded-t-lg border-0 border-b border-outline-variant/40 bg-surface-container-lowest px-0 py-3 font-sans text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-colors focus:border-primary focus:bg-primary-container/20 focus:ring-0";

const fieldErrorClass = "border-error/60 focus:border-error";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset();
    }
  }, [state?.ok]);

  return (
    <form ref={formRef} action={formAction} className="space-y-8" noValidate>
      <div>
        <label
          htmlFor="contact-name"
          className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          disabled={pending}
          aria-invalid={Boolean(state?.errors?.name?.length)}
          aria-describedby={
            state?.errors?.name?.length ? "contact-name-error" : undefined
          }
          className={`${fieldClass} ${state?.errors?.name?.length ? fieldErrorClass : ""}`}
        />
        {state?.errors?.name?.[0] ? (
          <p
            id="contact-name-error"
            className="mt-2 font-sans text-sm text-error"
            role="alert"
          >
            {state.errors.name[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          disabled={pending}
          aria-invalid={Boolean(state?.errors?.email?.length)}
          aria-describedby={
            state?.errors?.email?.length ? "contact-email-error" : undefined
          }
          className={`${fieldClass} ${state?.errors?.email?.length ? fieldErrorClass : ""}`}
        />
        {state?.errors?.email?.[0] ? (
          <p
            id="contact-email-error"
            className="mt-2 font-sans text-sm text-error"
            role="alert"
          >
            {state.errors.email[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
          disabled={pending}
          aria-invalid={Boolean(state?.errors?.message?.length)}
          aria-describedby={
            state?.errors?.message?.length ? "contact-message-error" : undefined
          }
          className={`${fieldClass} resize-y rounded-lg ${state?.errors?.message?.length ? fieldErrorClass : ""}`}
        />
        {state?.errors?.message?.[0] ? (
          <p
            id="contact-message-error"
            className="mt-2 font-sans text-sm text-error"
            role="alert"
          >
            {state.errors.message[0]}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-(--radius-button) px-8 py-3.5 text-center text-base font-medium text-on-primary shadow-(--shadow-ambient) transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)",
        }}
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>

      {state?.ok && state.message ? (
        <p className="font-sans text-sm text-primary" role="status" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      {state?.message && !state.ok ? (
        <p className="font-sans text-sm text-error" role="alert" aria-live="assertive">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
