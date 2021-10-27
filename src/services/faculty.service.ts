import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Faculty } from 'src/models/faculty.entity';
@Injectable()
export class FacultyService extends TypeOrmCrudService<Faculty> {
  constructor(@InjectRepository(Faculty) repo) {
    super(repo);
  }
}
