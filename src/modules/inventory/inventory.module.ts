import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from 'src/controllers/equipment.controller';
import { PlaceController } from 'src/controllers/place.controller';
import { Equipment } from 'src/models/equipment.entity';
import { Place } from 'src/models/place.entity';
import { EquipmentService } from 'src/services/equipment.service';
import { PlaceService } from 'src/services/place.service';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment, Place])],
  controllers: [EquipmentController, PlaceController],
  providers: [EquipmentService, PlaceService],
})
export class InventoryModule {}
