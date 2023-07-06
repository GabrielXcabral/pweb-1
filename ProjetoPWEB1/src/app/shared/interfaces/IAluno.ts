import { IHorario } from "./IHorario";

export interface IAluno {
  nomeCompleto?: string;
  curso?: string;
  matricula?: string;
  id?: string;
  horarios?: IHorario[];
}