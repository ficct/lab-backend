import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Place } from 'entities/Place';
import { PlaceType } from 'entities/PlaceType';

import { PlaceService } from './place.service';
import { PlaceTypeService } from './place-type/place-type.service';

import { PlaceController } from './place.controller';
import { PlaceTypeController } from './place-type/place-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Place, PlaceType])],
  controllers: [PlaceController, PlaceTypeController],
  providers: [PlaceService, PlaceTypeService],
})
export class PlaceModule {}
