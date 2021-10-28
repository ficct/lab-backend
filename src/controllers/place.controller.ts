import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Place } from 'src/models/place.entity';
import { PlaceService } from 'src/services/place.service';

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
