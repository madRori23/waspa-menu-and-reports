import { describe, expect, it } from "vitest";
import { emailsMatch, reportPhonePattern, requiresChildAuthorisation } from "@/lib/report-validation";

describe("WASPA report validation", () => {
  it("requires matching email confirmation", () => {
    expect(emailsMatch("consumer@example.com", "other@example.com")).toBe(false);
    expect(emailsMatch("consumer@example.com", "consumer@example.com")).toBe(true);
  });
  it("accepts the WASPA mobile number formats and rejects incomplete numbers", () => {
    const pattern = new RegExp(`^(?:${reportPhonePattern})$`);
    expect(pattern.test("082 123 4567")).toBe(true);
    expect(pattern.test("082-123-4567")).toBe(true);
    expect(pattern.test("082 123 456")).toBe(false);
  });
  it("requires child authorisation only when child information is provided", () => {
    expect(requiresChildAuthorisation("child")).toBe(true);
    expect(requiresChildAuthorisation("no-child")).toBe(false);
  });
});