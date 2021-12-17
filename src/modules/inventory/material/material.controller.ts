import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Material } from './material.entity';
import { MaterialService } from './material.service';

@Crud({
  model: {
    type: Material,
  },
})
@ApiTags('Material')
@Controller('materials')
export class MaterialController implements CrudController<Material> {
  constructor(public service: MaterialService) {}

  get base(): CrudController<Material> {
    return this;
  }

  /*
  @Override()
  @ApiOperation({
    summary: 'Crear Materiales',
    description: 'Endpoint para crear varios materiales.',
  })
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<Material>,
  ) {
    return this.base.createManyBase(req, dto);
  }*/
}
