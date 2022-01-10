import { Module } from '@nestjs/common';
import { EquipmentUnitService } from './equipment-unit.service';
import { EquipmentUnitController } from './equipment-unit.controller';

@Module({
  controllers: [EquipmentUnitController],
  providers: [EquipmentUnitService],
})
export class EquipmentUnitModule {}
