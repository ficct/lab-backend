import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { Requirement } from 'entities/Requirement';

@Injectable()
export class RequirementService extends TypeOrmCrudService<Requirement> {
  constructor(
    @InjectRepository(Requirement) public repo: Repository<Requirement>,
  ) {
    super(repo);
  }
}
