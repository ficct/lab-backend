import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Movement } from 'entities/Movement';
import { MovementReason } from 'entities/MovementReason';

import { MovementService } from './movement.service';
import { MovementReasonService } from './movement-reason/movement-reason.service';

import { MovementController } from './movement.controller';
import { MovementReasonController } from './movement-reason/movement-reason.controller';
import { EquipmentModule } from '../equipment/equipment.module';

@Module({
  imports: [
    EquipmentModule,
    TypeOrmModule.forFeature([Movement, MovementReason]),
  ],
  controllers: [MovementController, MovementReasonController],
  providers: [MovementService, MovementReasonService],
})
export class MovementModule {}
