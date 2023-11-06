export interface Curso {
  id?: string;
  uf: string;
  cidade: string;
  local: string;
  horario: string;
  valor: number;
  dataCurso: Date;
  responsavel: string;
  telefoneResponsavel: string;
  descricao: string;
  criadoEm?: string;
}
