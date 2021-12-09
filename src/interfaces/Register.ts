export interface RegisterStudentResponse {
  response: {
    data: StudentData[];
    success: 'true' | 'false';
  };
}

export interface StudentData {
  ra: number;
  nome: string;
  bio?: string;
  email: string;
  id_aluno: number;
  foto?: string | null;
  empregado?: string | null;
  telefone?: number | string | null;
}
