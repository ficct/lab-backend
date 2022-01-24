import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import brands from './brands.json';
import { EquipmentBrand } from 'entities/EquipmentBrand';

@Injectable()
export class EquipmentBrandService extends TypeOrmCrudService<EquipmentBrand> {
  constructor(@InjectRepository(EquipmentBrand) repo) {
    super(repo);
  }

  async seed() {
    const count = await this.repo.count();
    if (!count) {
      await this.repo
        .createQueryBuilder()
        .insert()
        .into(EquipmentBrand)
        .values(brands)
        .execute();
    }
  }
}
