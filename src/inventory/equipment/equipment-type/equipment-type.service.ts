import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { EquipmentType } from 'entities/EquipmentType';

@Injectable()
export class EquipmentTypeService extends TypeOrmCrudService<EquipmentType> {
  constructor(@InjectRepository(EquipmentType) repo) {
    super(repo);
  }
}
