import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import careers from './careers.json';
import { Career } from 'entities/Career';

@Injectable()
export class CareerService extends TypeOrmCrudService<Career> {
  constructor(@InjectRepository(Career) repo) {
    super(repo);
  }

  async seed() {
    const count = await this.repo.count();
    if (!count) {
      await this.repo
        .createQueryBuilder()
        .insert()
        .into(Career)
        .values(careers)
        .execute();
    }

    return this.repo.find();
  }
}
