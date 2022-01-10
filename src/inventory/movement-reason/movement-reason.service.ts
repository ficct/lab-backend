import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { MovementReason } from 'entities/MovementReason';

@Injectable()
export class MovementReasonService extends TypeOrmCrudService<MovementReason> {
  constructor(@InjectRepository(MovementReason) repo) {
    super(repo);
  }
}
