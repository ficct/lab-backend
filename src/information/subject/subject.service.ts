import { Injectable } from '@nestjs/common';
import { CrudRequest } from '@nestjsx/crud';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import subjects from './subjects.json';
import requirements from './requirement/requirements.json';
import subject_reqs from './subject-career/subject-reqs.json';

import { Career } from 'entities/Career';
import { Subject } from 'entities/Subject';

import { RequirementService } from './requirement/requirement.service';
import { SubjectCareerService } from './subject-career/subject-career.service';

interface QuerySubjectOptions {
  page: number;
  limit: number;
  careerId?: number;
  semester?: number;
}

@Injectable()
export class SubjectService extends TypeOrmCrudService<Subject> {
  constructor(
    @InjectRepository(Subject) repo,
    private req: RequirementService,
    private subjectReq: SubjectCareerService,
  ) {
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

  async seedReqs(careersKey) {
    for (const req of requirements) {
      const { subjectCode, preReqs = [], careersCode = [], semester } = req;
      const subject = await this.repo.findOne({
        where: { code: subjectCode },
      });

      for (let index = 0; index < careersCode.length; index++) {
        for (const code of careersCode) {
          const careerId = careersKey[code];
          for (const subjectCode of preReqs) {
            const preReqSubject = await this.repo.findOne({
              where: { code: subjectCode },
            });

            const requirement = this.req.repo.create({
              careerid: careerId,
              subjectPreqId: subject.id,
              subjectReqId: preReqSubject.id,
            });

            await this.req.repo.save(requirement);
          }

          const subject_career = this.subjectReq.repo.create({
            semester: semester,
            careerid: careerId,
            subjectid: subject.id,
          });

          await this.subjectReq.repo.save(subject_career);
        }
      }
    }
  }

  async seedSubjectReqs(careersKey) {
    for (const subject_req of subject_reqs) {
      const { semester } = subject_req;
      delete subject_req['semester'];

      for (const code in subject_req) {
        const careerId = careersKey[code] as number;
        const subjectsCode = subject_req[code] as string[];

        for (let index = 0; index < subjectsCode.length; index++) {
          const subject = await this.repo.findOne({
            where: { code: subjectsCode[index] },
          });

          const subject_career = this.subjectReq.repo.create({
            careerid: careerId,
            semester: semester,
            subjectid: subject.id,
          });

          await this.subjectReq.repo.save(subject_career);
        }
      }
    }
  }

  async seed(careers: Career[]) {
    const count = await this.repo.count();
    if (count) {
      await this.repo
        .createQueryBuilder()
        .insert()
        .into(Subject)
        .values(subjects)
        .execute();

      // seedRequirements
      const careersKey = {};
      for (const { id, code } of careers) {
        careersKey[code] = id;
      }
      await this.seedReqs(careersKey);
      await this.seedSubjectReqs(careersKey);
    }
  }
}
