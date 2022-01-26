import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { EquipmentBrand } from 'entities/EquipmentBrand';

@Injectable()
export class EquipmentBrandService extends TypeOrmCrudService<EquipmentBrand> {
  constructor(@InjectRepository(EquipmentBrand) repo) {
    super(repo);
  }
}
