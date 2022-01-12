import { Response } from 'express';

import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';

import { Subject } from 'entities/Subject';
import { SubjectService } from './subject.service';

@Crud({
  model: { type: Subject },
})
@ApiTags('subjects')
@Controller('subjects')
export class SubjectController implements CrudController<Subject> {
  constructor(public service: SubjectService) {}

  @Get('/')
  async findAll(@Query() query, @Res() res: Response<Subject[]>) {
    let { semester, careerId } = query;
    const { page = 0, limit = 5 } = query;

    semester = Number.parseInt(semester);
    careerId = Number.parseInt(careerId);

    try {
      const subjects = await this.service.getSubjectWithQuery({
        page,
        limit,
        semester: isNaN(semester) ? null : semester,
        careerId: isNaN(careerId) ? null : careerId,
      });

      return res.status(HttpStatus.ACCEPTED).send(subjects);
    } catch (err) {
      console.error(err);
    }
    return res.status(HttpStatus.NO_CONTENT).send([]);
  }
}
