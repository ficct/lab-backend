import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { PlaceType } from 'entities/PlaceType';

@Injectable()
export class PlaceTypeService extends TypeOrmCrudService<PlaceType> {
  constructor(@InjectRepository(PlaceType) repo) {
    super(repo);
  }
}
