import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Place } from 'entities/Place';
import { PlaceService } from './place.service';

@Crud({
  model: { type: Place },
})
@ApiTags('places')
@Controller('places')
export class PlaceController implements CrudController<Place> {
  constructor(public service: PlaceService) {}
}
