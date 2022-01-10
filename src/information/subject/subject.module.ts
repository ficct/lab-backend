import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Subject } from 'entities/Subject';
import { Requirement } from 'entities/Requirement';
import { SubjectCareer } from 'entities/SubjectCareer';

import { SubjectService } from './subject.service';

import { SubjectController } from './subject.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Requirement, SubjectCareer])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
