import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { University } from 'src/models/university.entity';
@Injectable()
export class UniversityService extends TypeOrmCrudService<University> {
  constructor(@InjectRepository(University) repo) {
    super(repo);
  }
}
