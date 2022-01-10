import { Module } from '@nestjs/common';
import { EquipmentBrandService } from './equipment-brand.service';
import { EquipmentBrandController } from './equipment-brand.controller';

@Module({
  controllers: [EquipmentBrandController],
  providers: [EquipmentBrandService],
})
export class EquipmentBrandModule {}
