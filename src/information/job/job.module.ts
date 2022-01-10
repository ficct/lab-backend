import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobService } from './job.service';

import { JobTitle } from 'entities/JobTitle';

import { JobController } from './job.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JobTitle])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
