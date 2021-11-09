import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { FileInterceptor } from '@nestjs/platform-express';
import { Equipment } from 'src/models/equipment.entity';
import { EquipmentService } from 'src/services/equipment.service';
import xlsx from 'node-xlsx';
import { FileDTO } from 'src/dtos/file_parse.dto';
import { PlaceService } from 'src/services/place.service';

@Crud({
  model: {
    type: Equipment,
  },
})
@ApiTags('Equipment')
@Controller('equipments')
export class EquipmentController implements CrudController<Equipment> {
  constructor(
    public service: EquipmentService,
    public placeService: PlaceService,
  ) {}

  @ApiOperation({
    summary: 'Upload bulk from file',
    description: 'Endpoint created to upload ```.xlsl``` file.',
  })
  @Post('upload_bulk')
  @ApiBody({
    required: true,
  })
  @ApiCreatedResponse({
    description: 'File upload response.',
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async createLoads(
    @UploadedFile() file: Express.Multer.File,
    @Body('place_id') id: number,
  ): Promise<Equipment[]> {
    const parsed_file: FileDTO[] = xlsx.parse(file.buffer);
    const place = await this.placeService.findOne(id);
    if (place === undefined) {
      throw new BadRequestException('Invalid Place.');
    }
    return await this.service.uploadLoads(parsed_file, place.place_code);
  }
}
