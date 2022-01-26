import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import equipment_types from './types.json';
import { EquipmentType } from 'entities/EquipmentType';

@Injectable()
export class EquipmentTypeService extends TypeOrmCrudService<EquipmentType> {
  constructor(@InjectRepository(EquipmentType) repo) {
    super(repo);
  }

  async seed() {
    const count = await this.repo.count();
    if (!count) {
      await this.repo
        .createQueryBuilder()
        .insert()
        .into(EquipmentType)
        .values(equipment_types)
        .execute();
    }
  }
}
