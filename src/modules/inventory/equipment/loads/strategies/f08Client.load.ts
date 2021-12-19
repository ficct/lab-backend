import { FileDTO } from '../file_parse.dto';
import { Strategy } from '../strategy';

export class LoadClientF08 implements Strategy {
  public doAlgorithm(file: FileDTO[]): any {
    const summary = file.find((detail) => detail.name === 'Indice');

    const p = this.processSummary(summary);

    const al = p.allocation.map((x) => {
      return x.allocation_id;
    });

    const wi = p.without.map((x) => {
      return x.allocation_id;
    });

    const data = file.filter((detail) => al.find((x) => detail.name === x));
    const res = data.map((x) => {
      return this.processData(x);
    });

    return {
      summary: this.processSummary(summary),
      tabs: [...res],
    };
  }

  processData2(tab: FileDTO) {
    const col = [
      'NRO',
      'CODIGO',
      'UND',
      'DESCRIPCION',
      'ESTADO',
      'OBSERVACION',
    ];
    return 1;
  }

  processData(tab: FileDTO) {
    const col = [
      'NRO',
      'CODIGO',
      'UND',
      'DESCRIPCION',
      'ESTADO',
      'OBSERVACION',
    ];
    const res = [];
    const str = JSON.stringify(col).trim();
    for (let i = 0; i < tab.data.length; ++i) {
      const row = tab.data[i];
      const str_current = JSON.stringify(row).trim();
      if (str === str_current) {
        let j = i + 1;
        while (j < tab.data.length && tab.data[j].length != 0) {
          const item = {
            NRO: tab.data[j][0],
            CODIGO: tab.data[j][1],
            UND: tab.data[j][2],
            DESCRIPCION: tab.data[j][3],
            ESTADO: tab.data[j][4],
            OBSERVACION: tab.data[j][5],
            actions: 'xx',
          };
          res.push(item);
          j++;
        }
        i = j;
      }
    }
    return {
      col: col,
      data: res,
    };
  }

  processSummary(tab: FileDTO): any {
    const col = [
      'ITEM',
      'ASIGNACIÓN',
      'GRUPO',
      'LUGAR',
      'OBSERVACION',
      'ESTADO',
    ];
    const str = JSON.stringify(col).trim();
    let with_allocation = false;
    const allocation = [];
    const without = [];

    for (let i = 0; i < tab.data.length; ++i) {
      const row = tab.data[i];
      const str_current = JSON.stringify(row).trim();

      if (str === str_current) {
        let j = i + 1;
        while (j < tab.data.length && tab.data[j].length != 0) {
          const d = {
            item: tab.data[j][0],
            allocation_id: `${tab.data[j][1]}`.trim(),
            group: tab.data[j][2],
            place: tab.data[j][3],
            observation: tab.data[j][4],
            status: tab.data[j][5],
          };
          if (!with_allocation) {
            allocation.push(d);
          } else {
            without.push(d);
          }
          //console.log(tab.data[j]);
          j++;
        }
        with_allocation = true;
        i = j;
      }
    }

    return {
      allocation: allocation,
      without: without,
    };
  }
}
