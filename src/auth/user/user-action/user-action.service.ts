import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { UserAction } from 'entities/UserAction';

@Injectable()
export class UserActionService extends TypeOrmCrudService<UserAction> {
  constructor(@InjectRepository(UserAction) repo) {
    super(repo);
  }
}
