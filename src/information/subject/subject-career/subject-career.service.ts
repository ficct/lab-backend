import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { SubjectCareer } from 'entities/SubjectCareer';

@Injectable()
export class SubjectCareerService extends TypeOrmCrudService<SubjectCareer> {
  constructor(@InjectRepository(SubjectCareer) repo) {
    super(repo);
  }
}
