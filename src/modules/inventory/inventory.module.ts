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
    ]),
  ],
  controllers: [
    EquipmentController,
    PlaceController,
    MaterialController,
    AccessoryController,
  ],
  providers: [
    EquipmentService,
    PlaceService,
    MaterialService,
    AccessoryService,
  ],
})
export class InventoryModule {}
