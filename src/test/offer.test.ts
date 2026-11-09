import { describe, expect, it } from "vitest";
import { marketTotal, offer } from "@/lib/offer";

describe("Official offer", () => {
  it("charges R$ 39,90 for the Roteiro", () => {
    expect(offer.price).toBe(39.9);
  });
  it("uses the supplied market reference values totaling R$ 838,00", () => {
    expect(offer.marketValues).toEqual([397, 147, 97, 197]);
    expect(marketTotal).toBe(838);
  });
  it("includes the live masterclass and WhatsApp group at no additional charge today", () => {
    expect(offer.giftPriceToday).toBe(0);
    expect(offer.giftIncludes).toEqual({ liveMasterclass: true, whatsappGroup: true });
  });
});