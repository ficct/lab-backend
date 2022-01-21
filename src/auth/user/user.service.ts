import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { User } from 'entities/User';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  getOne(req: CrudRequest): Promise<User> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: ['role'],
    });
  }
}
