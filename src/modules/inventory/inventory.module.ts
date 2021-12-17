import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { University } from './university/university.entity';
import { UniversityService } from './university/university.service';
import { UniversityController } from './university/university.controller';

import { Career } from './career/career.entity';
import { CareerService } from './career/career.service';
import { CareerController } from './career/career.controller';

import { Faculty } from './faculty/faculty.entity';
import { FacultyService } from './faculty/faculty.service';
import { FacultyController } from './faculty/faculty.controller';

import { Material } from './material/material.entity';
import { MaterialService } from './material/material.service';
import { MaterialController } from './material/material.controller';

import { Modulo } from './module/module.entity';
import { ModuleService } from './module/module.service';
import { ModuleController } from './module/module.controller';

import { Place } from './place/place.entity';
import { PlaceType } from './place/place_type.entity';

import { PlaceService } from './place/place.service';
import { PlaceController } from './place/place.controller';

import { Accessory } from './accesory/accessory.entity';
import { AccessoryStatus } from './accesory/accessory_status.entity';

import { AccessoryService } from './accesory/accessory.service';
import { AccessoryController } from './accesory/accessory.controller';

import { Equipment } from './equipment/equipment.entity';
import { Allocation } from './equipment/allocation.entity';
import { EquipmentStatus } from './equipment/equipment._status.entity';

import { EquipmentService } from './equipment/equipment.service';
import { EquipmentController } from './equipment/equipment.controller';

import { Report } from './report/report.entity';
import { ReportService } from './report/report.service';
import { ReportController } from './report/report.controller';

import { Endowment } from './place/endowment.entity';
import { EndowmentDetail } from './place/endowment_detail.entity';

// OPERATING SYSTEMS - IMAGES
import { Image } from './place/os/image.entity';
import { Program } from './place/os/program.entity';
import { Partition } from './place/os/partition.entity';
import { OperatingSystem } from './place/os/operating_system.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Image,
      Program,
      Partition,
      OperatingSystem,

      Career,
      Report,

      Endowment,
      EndowmentDetail,

      Material,
      Accessory,
      AccessoryStatus,

      Equipment,
      Allocation,
      EquipmentStatus,

      Place,
      PlaceType,
      Modulo,
      Faculty,
      University,
    ]),
  ],
  controllers: [
    CareerController,
    ReportController,

    MaterialController,
    EquipmentController,
    AccessoryController,

    PlaceController,
    ModuleController,
    FacultyController,
    UniversityController,
  ],
  providers: [
    CareerService,
    ReportService,

    MaterialService,
    EquipmentService,
    AccessoryService,

    PlaceService,
    FacultyService,
    ModuleService,
    UniversityService,
  ],
})
export class InventoryModule {}
