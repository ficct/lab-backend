import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Modulo } from './module.entity';

@Injectable()
export class ModuleService extends TypeOrmCrudService<Modulo> {
  constructor(@InjectRepository(Modulo) repo) {
    super(repo);
  }
}
