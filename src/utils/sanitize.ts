export const sanitizeCPF = (cpf: string) => {
  return cpf.replace(/[.\\-]/g, '');
};