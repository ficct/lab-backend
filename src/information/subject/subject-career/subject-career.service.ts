import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { SubjectCareer } from 'entities/SubjectCareer';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectCareerService extends TypeOrmCrudService<SubjectCareer> {
  constructor(
    @InjectRepository(SubjectCareer) public repo: Repository<SubjectCareer>,
  ) {
    super(repo);
  }
}
