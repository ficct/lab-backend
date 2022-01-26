import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Subject } from 'entities/Subject';
import { Requirement } from 'entities/Requirement';
import { SubjectCareer } from 'entities/SubjectCareer';

import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { RequirementService } from './requirement/requirement.service';
import { SubjectCareerService } from './subject-career/subject-career.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Requirement, SubjectCareer])],
  controllers: [SubjectController],
  providers: [SubjectService, RequirementService, SubjectCareerService],
  exports: [SubjectService, RequirementService, SubjectCareerService],
})
export class SubjectModule {}
