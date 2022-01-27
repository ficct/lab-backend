import { DeepPartial } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { User } from 'entities/User';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo, private mailService: MailService) {
    super(repo);
  }

  getOne(req: CrudRequest): Promise<User> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: ['role'],
    });
  }

  async createOne(req: CrudRequest, dto: DeepPartial<User>): Promise<User> {
    const user = await super.createOne(req, dto);
    this.mailService.sendUserConfirmation(user, process.env.SECRET);
    return user;
  }
}
