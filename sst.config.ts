// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "anamcarabodywork",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    // Verified SES addresses created outside SST often have no configuration set. SST's
    // `Email.get()` still expects one and fails Pulumi with "Expected an ID" for the config set.
    // Use a Secret for the From address + explicit SES permissions instead.
    const outboundSender = new sst.Secret(
      "OutboundSender"
    );
    const contactInbox = new sst.Secret("ContactInbox");

    new sst.aws.Nextjs("MyWeb", {
      domain:
        $app.stage === "production"
          ? {
              name: "anamcarabodywork.com",
              redirects: ["www.anamcarabodywork.com"],
            }
          : undefined,
      link: [outboundSender, contactInbox],
      permissions: [
        {
          actions: ["ses:SendEmail", "ses:SendRawEmail"],
          resources: ["*"],
        },
      ],
    });
  },
});
