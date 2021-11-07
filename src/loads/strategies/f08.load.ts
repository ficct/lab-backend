import { FileDTO } from 'src/dtos/file_parse.dto';
import { Strategy } from '../strategy';

export class LoadF08 implements Strategy {
  public doAlgorithm(file: FileDTO[], id: string): any[] {
    //Check if Index tab exits
    const main_index = file.findIndex((x) => {
      return x.name === 'Indice';
    });
    const data_index: number[] = [];

    const lab = file[main_index].data[0][0].split(' ')[2];

    // Check if there are tabs
    const tab_names: string[] = file
      .map((tab) => {
        return tab.name;
      })
      .filter((item) => {
        const regex = new RegExp(`${id}*`);
        return regex.test(item);
      });

    for (let i = 0; i < tab_names.length; i++) {
      const element = tab_names[i];
      data_index.push(
        file.findIndex((x) => {
          return x.name === element;
        }),
      );
    }

    console.log(data_index);
    console.log(main_index);

    return [];
  }
}
