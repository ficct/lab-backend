import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import units from './units.json';
import { EquipmentUnit } from 'entities/EquipmentUnit';

@Injectable()
export class EquipmentUnitService extends TypeOrmCrudService<EquipmentUnit> {
  constructor(@InjectRepository(EquipmentUnit) repo) {
    super(repo);
  }

  async seed() {
    const count = await this.repo.count();
    if (!count) {
      await this.repo
        .createQueryBuilder()
        .insert()
        .into(EquipmentUnit)
        .values(units)
        .execute();
    }
  }
}
