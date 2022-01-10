import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Movement } from 'entities/Movement';

@Injectable()
export class MovementService extends TypeOrmCrudService<Movement> {
  constructor(@InjectRepository(Movement) repo) {
    super(repo);
  }
}
