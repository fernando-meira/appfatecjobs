export interface VacancyProps {
  tipo?: string;
  titulo: string;
  id_vaga: number;
  salario?: number;
  descricao?: string;
  localizacao?: string;
  id_empresa_fk: number;
}

export interface VacancyResponse {
  response: VacancyProps[];
}
