import { Module } from '@nestjs/common';
import { MovementReasonService } from './movement-reason.service';
import { MovementReasonController } from './movement-reason.controller';

@Module({
  controllers: [MovementReasonController],
  providers: [MovementReasonService],
})
export class MovementReasonModule {}
