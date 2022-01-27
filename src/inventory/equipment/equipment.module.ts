import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Equipment } from 'entities/Equipment';
import { EquipmentUnit } from 'entities/EquipmentUnit';
import { EquipmentType } from 'entities/EquipmentType';
import { EquipmentBrand } from 'entities/EquipmentBrand';

import { EquipmentService } from './equipment.service';
import { EquipmentUnitService } from './equipment-unit/equipment-unit.service';
import { EquipmentTypeService } from './equipment-type/equipment-type.service';
import { EquipmentBrandService } from './equipment-brand/equipment-brand.service';

import { EquipmentController } from './equipment.controller';
import { EquipmentTypeController } from './equipment-type/equipment-type.controller';
import { EquipmentUnitController } from './equipment-unit/equipment-unit.controller';
import { EquipmentBrandController } from './equipment-brand/equipment-brand.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Equipment,
      EquipmentType,
      EquipmentUnit,
      EquipmentBrand,
    ]),
  ],
  controllers: [
    EquipmentController,
    EquipmentUnitController,
    EquipmentTypeController,
    EquipmentBrandController,
  ],
  providers: [
    EquipmentService,
    EquipmentUnitService,
    EquipmentTypeService,
    EquipmentBrandService,
  ],
  exports: [EquipmentService],
})
export class EquipmentModule {}
