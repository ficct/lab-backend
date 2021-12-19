import { FileDTO } from './file_parse.dto';
export interface Strategy {
  doAlgorithm(file: FileDTO[], id?: string): any[] | any;
}
