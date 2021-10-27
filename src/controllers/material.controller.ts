import { MaterialService } from './../services/material.service';
import { Material } from './../models/material.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: Material,
  },
})
@Controller('materials')
export class MaterialController implements CrudController<Material> {
  constructor(public service: MaterialService) {}
}
