import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Index } from "@/routes/index";
import { masterclass, offer } from "@/lib/offer";

afterEach(cleanup);

describe("Purchase checkout", () => {
  it("sends every purchase action directly to the official Hotmart checkout", () => {
    render(<Index />);
    const links = screen.getAllByRole("link");
    const purchaseLinks = links.filter((link) => link.getAttribute("href") === offer.checkoutUrl);
    expect(purchaseLinks.length).toBeGreaterThan(0);
    for (const link of purchaseLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    for (const link of links) {
      expect(link.getAttribute("href")).toMatch(/^(https:\/\/pay\.hotmart\.com|https:\/\/chat\.whatsapp\.com)/);
    }
  });

  it("opens the masterclass WhatsApp group in a new tab", () => {
    render(<Index />);
    const link = screen.getByRole("link", { name: /Entrar no Grupo do WhatsApp para a Masterclass/i });
    expect(link).toHaveAttribute("href", masterclass.whatsappUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
