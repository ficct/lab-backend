import { Injectable } from '@nestjs/common';
import { CrudRequest } from '@nestjsx/crud';
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

  async getSubjectWithQuery(query: QuerySubjectOptions): Promise<Subject[]> {
    const { limit, page, careerId, semester } = query;

    if (careerId && semester) {
      return this.repo
        .createQueryBuilder('s')
        .distinct(true)
        .leftJoin('s.requires', 'requires')
        .leftJoin('s.isRequiredBy', 'isRequiredBy')
        .leftJoin('s.subjectCareers', 'sc')
        .where(`sc.careerid = ${careerId}`)
        .andWhere(`sc.semester = ${semester}`)
        .take(limit)
        .skip(limit * page)
        .getMany();
    }

    return this.repo.find({
      take: limit,
      skip: limit * page,
    });
  }

  getOne(req: CrudRequest): Promise<Subject> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: ['requires', 'isRequiredBy'],
    });
  }
}
