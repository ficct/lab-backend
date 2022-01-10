import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Career } from 'entities/Career';

@Injectable()
export class CareerService extends TypeOrmCrudService<Career> {
  constructor(@InjectRepository(Career) repo) {
    super(repo);
  }
}
