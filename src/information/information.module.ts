import { Module } from '@nestjs/common';
import { JobModule } from './job/job.module';
import { CareerModule } from './career/career.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [JobModule, CareerModule, SubjectModule]
})
export class InformationModule {}
