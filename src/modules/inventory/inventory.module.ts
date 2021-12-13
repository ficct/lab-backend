import { Permission } from './../../models/permission.entity';
import { RoleService } from './../../services/role.service';
import { ModuleService } from './../../services/module.service';
import { University } from 'src/models/university.entity';
import { CareerController } from './../../controllers/career.controller';
import { UniversityController } from './../../controllers/university.controller';
import { FacultyController } from './../../controllers/faculty.controller';
import { UniversityService } from './../../services/university.service';
import { MaterialService } from './../../services/material.service';
import { MaterialController } from './../../controllers/material.controller';
import { EndowmentDetail } from './../../models/endowment_detail.entity';
import { Material } from './../../models/material.entity';
import { Type } from './../../models/type.entity';
import { Endowment } from './../../models/endowment.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from 'src/controllers/equipment.controller';
import { PlaceController } from 'src/controllers/place.controller';
import { Accessory } from 'src/models/accessory.entity';
import { Equipment } from 'src/models/equipment.entity';
import { Place } from 'src/models/place.entity';
import { PlaceType } from 'src/models/place_type.entity';
import { EquipmentService } from 'src/services/equipment.service';
import { PlaceService } from 'src/services/place.service';
import { AccessoryService } from 'src/services/accessory.service';
import { AccessoryController } from 'src/controllers/accessory.controller';
import { FacultyService } from 'src/services/faculty.service';
import { ReportService } from 'src/services/report.service';
import { TaskService } from 'src/services/task.service';
import { TaskController } from 'src/controllers/task.controller';
import { ReportController } from 'src/controllers/report.controller';
import { Faculty } from 'src/models/faculty.entity';
import { Report } from 'src/models/report.entity';
import { Modulo } from 'src/models/module.entity';
import { ModuleController } from 'src/controllers/module.controller';
import { PermissionService } from 'src/services/permission.service';
import { Role } from 'src/models/role.entity';
import { RoleController } from 'src/controllers/role.controller';
import { PermissionController } from 'src/controllers/permission.controller';

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
      Role,
      Permission,
    ]),
  ],
  controllers: [
    EquipmentController,
    PlaceController,
    MaterialController,
    AccessoryController,
    FacultyController,
    UniversityController,
    ReportController,
    ModuleController,
    RoleController,
    PermissionController,
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
    RoleService,
    PermissionService,
  ],
})
export class InventoryModule {}
