import { validateCPF, validateEmail, validateName } from "./validateForms";

describe("validateForms", () => {
  it("Should validate CPF correctly", () => {
    const validCPF = validateCPF("110.106.030-19");
    const invalidCPF = validateCPF("111.222.333-44");

    expect(validCPF).toBeTruthy();
    expect(invalidCPF).toBeFalsy();
  });

  it("Should validate e-mail correctly", () => {
    const validEmail = validateEmail("felipe@gmail.com");
    const invalidEmail = validateEmail("felipegmail.com");

    expect(validEmail).toBeTruthy();
    expect(invalidEmail).toBeFalsy();
  });

  it("Should validate name correctly", () => {
    const validName = validateName("Felipe Campos");
    const invalidName = validateName("Felipe");

    expect(validName).toBeTruthy();
    expect(invalidName).toBeFalsy();
  });
});
