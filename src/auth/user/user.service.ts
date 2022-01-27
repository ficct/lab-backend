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
    await this.mailService.sendUserConfirmation(user);
    return user;
  }

  async resendMail(userId: number) {
    const user = await this.repo.findOne(userId);
    await this.mailService.sendUserConfirmation(user);
  }

  async confirmMail(userId: number, token: string) {
    const user = await this.repo.findOne(userId);
    if (token === process.env.SECRET) {
      user.isVerified = true;
      this.repo.save(user);
      return true;
    }
    return false;
  }
}
