import "sst";

declare module "sst" {
  export interface Resource {
    OutboundSender: {
      type: "sst.sst.Secret";
      value: string;
    };
    ContactInbox: {
      type: "sst.sst.Secret";
      value: string;
    };
  }
}

export {};
