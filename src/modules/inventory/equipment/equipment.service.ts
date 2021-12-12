import { FileDTO } from 'src/dtos/file_parse.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Context } from 'src/loads/context';
import { LoadF08 } from 'src/loads/strategies/f08.load';

import { Equipment } from 'src/modules/inventory/equipment/equipment.entity';
import { Place } from 'src/modules/inventory/place/place.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(
    @InjectRepository(Equipment) repo,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
  ) {
    super(repo);
  }

  uploadLoads(parsed_file: FileDTO[], id: string): Promise<Equipment[]> {
    const context = new Context(new LoadF08());
    const bulk = context.generateBulk(parsed_file, id);
    return this.repo.save(bulk);
  }
}
