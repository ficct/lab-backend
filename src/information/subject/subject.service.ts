import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Subject } from 'entities/Subject';

interface QuerySubjectOptions {
  page: number;
  limit: number;
  careerId?: number;
  semester?: number;
}

@Injectable()
export class SubjectService extends TypeOrmCrudService<Subject> {
  constructor(@InjectRepository(Subject) repo) {
    super(repo);
  }

  async getSubjectQuery(query: QuerySubjectOptions): Promise<Subject[]> {
    const { limit, page, careerId, semester } = query;
    console.log(query);

    try {
      if (careerId && semester) {
        return await this.repo
          .createQueryBuilder('s')
          .distinct(true)
          .innerJoin('s.Career', 'c')
          .innerJoin('s.Subject_Career', 'sc')
          .where('c.id = :careerID', { careerId })
          .where('sc.semester = :semester', { semester })
          .take(limit)
          .skip(limit * page)
          .getMany();
      }

      return await this.repo.find({ take: limit, skip: limit * page });
    } catch (err) {
      console.error(err);
    }
    return [];
  }
}
