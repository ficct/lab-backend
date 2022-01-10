import { Module } from '@nestjs/common';

import { PlaceModule } from './place/place.module';
import { MovementModule } from './movement/movement.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [PlaceModule, EquipmentModule, MovementModule],
  exports: [PlaceModule, EquipmentModule, MovementModule],
})
export class InventoryModule {}
