import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Index } from "@/routes/index";

afterEach(cleanup);

describe("Purchase checkout", () => {
  it("sends every purchase action directly to the official Hotmart checkout", () => {
    render(<Index />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://pay.hotmart.com/P108316406G");
      expect(link).toHaveAttribute("target", "_blank");
    }
  });
});