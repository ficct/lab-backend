import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Career } from 'entities/Career';

import { CareerService } from './career.service';

import { CareerController } from './career.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Career])],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareerModule {}
