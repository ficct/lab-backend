import { Accessory } from './../models/accessory.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class AccessoryService extends TypeOrmCrudService<Accessory> {
  constructor(@InjectRepository(Accessory) repo) {
    super(repo);
  }
}
