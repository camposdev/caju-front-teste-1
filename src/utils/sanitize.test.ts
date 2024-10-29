import { sanitizeCPF } from "./sanitize";

describe("sanitizeCPF", () => {
  it("Should sanitize CPF correctly", () => {
    const sanitized = sanitizeCPF("110.106.030-19");

    expect(sanitized).toBe("11010603019");
  });
});