import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Requirement } from 'entities/Requirement';

@Injectable()
export class RequirementService extends TypeOrmCrudService<Requirement> {
  constructor(@InjectRepository(Requirement) repo) {
    super(repo);
  }
}
