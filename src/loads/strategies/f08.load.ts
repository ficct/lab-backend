import { FileDTO } from 'src/dtos/file_parse.dto';
import { Strategy } from '../strategy';

export class LoadF08 implements Strategy {
  public doAlgorithm(file: FileDTO[], id: string): any[] {
    //Check if Index tab exits
    const main_index = file.findIndex((x) => {
      return x.name === 'Indice';
    });
    const data_index: number[] = [];

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

    const data = [];

    const header = [
      'NRO',
      'CODIGO',
      'UND',
      'DESCRIPCION',
      'ESTADO',
      'OBSERVACION',
    ];
    const a = JSON.stringify(header);
    for (let i = 0; i < data_index.length; ++i) {
      const current_file = file[data_index[i]];

      for (let j = 0; j < current_file.data.length; ++j) {
        const current_line = current_file.data[j];
        const b = JSON.stringify(current_line);

        if (a === b) {
          j++;
          while (j < current_file.data.length) {
            //console.log(current_file.data[j]);
            data.push({
              code: current_file.data[j][1],
              unit: current_file.data[j][2],
              description: current_file.data[j][3],
              status: current_file.data[j][4],
              obs: current_file.data[j][5],
              is_available: true,
              loanable: true,
              high_drop: true,
            });
            j++;
          }
        }
      }
    }

    return data;
  }
}
