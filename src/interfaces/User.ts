export interface UserResponse {
  response: {
    data: UserData[];
    success: 'true' | 'false';
  };
}

export interface UserData {
  ra: number;
  nome: string;
  email: string;
  id_aluno: number;
  bio?: string | null;
  foto?: string | null;
  github?: string | null;
  empregado?: string | null;
  telefone?: number | string | null;
}
