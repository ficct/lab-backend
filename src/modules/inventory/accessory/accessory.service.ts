import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Accessory } from './accessory.entity';

@Injectable()
export class AccessoryService extends TypeOrmCrudService<Accessory> {
  constructor(@InjectRepository(Accessory) repo) {
    super(repo);
  }
}
