import { FileDTO } from './../dtos/file_parse.dto';
export interface Strategy {
  doAlgorithm(file: FileDTO[]): any[];
}
