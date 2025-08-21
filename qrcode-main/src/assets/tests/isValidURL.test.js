import { isValidURL } from "../utils/isValidURL";

describe("isValidURL", () => {
  it("returns true for valid URLs", () => {
    expect(isValidURL("https://google.com")).toBe(true);
    expect(isValidURL("http://localhost:3000")).toBe(true);
  });

  it("returns false for invalid URLs", () => {
    expect(isValidURL("asalskassa")).toBe(false);
    expect(isValidURL("")).toBe(false);
    expect(isValidURL("http//site.com")).toBe(false);
  });
});
