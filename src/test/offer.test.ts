import { describe, expect, it } from "vitest";
import { marketTotal, masterclass, offer } from "@/lib/offer";

describe("Official offer", () => {
  it("charges R$ 39,90 for the Roteiro", () => {
    expect(offer.price).toBe(39.9);
  });
  it("uses the supplied market reference values totaling R$ 708,00", () => {
    expect(offer.marketValues).toEqual([397, 147, 97, 67]);
    expect(marketTotal).toBe(708);
  });
  it("invites the buyer to the live masterclass on 30/11 at 19:30", () => {
    expect(masterclass.date).toBe("30/11");
    expect(masterclass.time).toBe("19:30");
  });
  it("points the masterclass button at the official WhatsApp group", () => {
    expect(masterclass.whatsappUrl).toBe("https://chat.whatsapp.com/GxM7OgqYGidJGI9YutkFBF?s=cl&p=a&iam=2");
  });
});
