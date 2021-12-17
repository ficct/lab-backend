import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Place } from './place.entity';
import { PlaceService } from './place.service';

@Crud({
  model: {
    type: Place,
  },
})
@ApiTags('Place')
@Controller('places')
export class PlaceController implements CrudController<Place> {
  constructor(public service: PlaceService) {}
}
