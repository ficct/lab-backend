import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { EquipmentUnit } from 'entities/EquipmentUnit';

@Injectable()
export class EquipmentUnitService extends TypeOrmCrudService<EquipmentUnit> {
  constructor(@InjectRepository(EquipmentUnit) repo) {
    super(repo);
  }
}
