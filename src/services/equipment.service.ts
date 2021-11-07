import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Equipment } from 'src/models/equipment.entity';
@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(@InjectRepository(Equipment) repo) {
    super(repo);
  }

  uploadLoads(bulk: any): Promise<Equipment[]> {
    console.log(bulk);
    return null;
  }
}
