import { FileDTO } from 'src/dtos/file_parse.dto';
import { Strategy } from '../strategy';

export class LoadF08 implements Strategy {
  public doAlgorithm(file: FileDTO[]): any[] {
    const x = [];
    file.forEach((f) => {
      x.push(f.name);
    });
    return x;
  }
}
