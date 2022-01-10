import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Equipment } from 'entities/Equipment';

@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(@InjectRepository(Equipment) repo) {
    super(repo);
  }
}
