import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Context } from 'src/loads/context';
import { FileDTO } from 'src/dtos/file_parse.dto';
import { LoadF08 } from 'src/loads/strategies/f08.load';

import { Place } from '../place/place.entity';
import { Equipment } from './equipment.entity';

@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(
    @InjectRepository(Equipment) repo,
    @InjectRepository(Place) public placeRepository: Repository<Place>,
  ) {
    super(repo);
  }

  uploadLoads(parsed_file: FileDTO[], id: string): Promise<Equipment[]> {
    const context = new Context(new LoadF08());
    const bulk = context.generateBulk(parsed_file, id);
    return this.repo.save(bulk);
  }
}
