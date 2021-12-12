import { MaterialService } from './material.service';
import { Material } from './material.entity';
import { Controller, Get } from '@nestjs/common';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

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
