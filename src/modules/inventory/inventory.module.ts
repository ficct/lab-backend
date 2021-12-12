import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { University } from 'src/modules/inventory/university/university.entity';
import { UniversityService } from './university/university.service';
import { UniversityController } from './university/university.controller';

import { CareerController } from './career/career.controller';

import { Faculty } from 'src/modules/inventory/faculty/faculty.entity';
import { FacultyService } from 'src/modules/inventory/faculty/faculty.service';
import { FacultyController } from './faculty/faculty.controller';

import { Material } from './material/material.entity';
import { MaterialService } from './material/material.service';
import { MaterialController } from './material/material.controller';

import { Modulo } from 'src/modules/inventory/module/module.entity';
import { ModuleService } from './module/module.service';
import { ModuleController } from 'src/modules/inventory/module/module.controller';

import { Type } from './../../models/type.entity';
import { PlaceType } from 'src/modules/inventory/place/place_type.entity';
import { Endowment } from './../../models/endowment.entity';
import { EndowmentDetail } from './../../models/endowment_detail.entity';

import { Place } from 'src/modules/inventory/place/place.entity';
import { PlaceService } from 'src/modules/inventory/place/place.service';
import { PlaceController } from 'src/modules/inventory/place/place.controller';

import { Accessory } from 'src/modules/inventory/accesory/accessory.entity';
import { AccessoryService } from 'src/modules/inventory/accesory/accessory.service';
import { AccessoryController } from 'src/modules/inventory/accesory/accessory.controller';

import { Equipment } from 'src/modules/inventory/equipment/equipment.entity';
import { EquipmentService } from 'src/modules/inventory/equipment/equipment.service';
import { EquipmentController } from 'src/modules/inventory/equipment/equipment.controller';

import { Report } from 'src/modules/inventory/report/report.entity';
import { ReportService } from 'src/modules/inventory/report/report.service';
import { ReportController } from 'src/modules/inventory/report/report.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Equipment,
      Place,
      Accessory,
      PlaceType,
      Endowment,
      EndowmentDetail,
      Type,
      Material,
      University,
      Faculty,
      Report,
      Modulo,
    ]),
  ],
  controllers: [
    MaterialController,
    ReportController,
    CareerController,
    AccessoryController,
    EquipmentController,
    PlaceController,
    ModuleController,
    FacultyController,
    UniversityController,
  ],
  providers: [
    EquipmentService,
    PlaceService,
    MaterialService,
    AccessoryService,
    FacultyService,
    ReportService,
    UniversityService,
    ModuleService,
  ],
})
export class InventoryModule {}
