export function CPFFormatter(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export const formatDate = (date: string) => {
  date = date.replace(/[^\d]/g, "");

  return date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
};

export const formatCNPJ = (cnpj: string) => {
  cnpj = cnpj.replace(/[^\d]/g, "");

  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};
