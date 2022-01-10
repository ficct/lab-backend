import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Place } from 'entities/Place';

@Injectable()
export class PlaceService extends TypeOrmCrudService<Place> {
  constructor(@InjectRepository(Place) repo) {
    super(repo);
  }
}
