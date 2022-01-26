import { Injectable } from '@nestjs/common';

import { JobService } from './information/job/job.service';
import { EquipmentBrandService } from './inventory/equipment/equipment-brand/equipment-brand.service';
import { EquipmentTypeService } from './inventory/equipment/equipment-type/equipment-type.service';
import { EquipmentUnitService } from './inventory/equipment/equipment-unit/equipment-unit.service';

@Injectable()
export class AppService {
  constructor(
    private jobService: JobService,
    private unitService: EquipmentUnitService,
    private typeService: EquipmentTypeService,
    private brandService: EquipmentBrandService,
  ) {}
  async seedDB() {
    try {
      await this.jobService.seed();
      await this.typeService.seed();
      await this.unitService.seed();
      await this.brandService.seed();
    } catch (err) {
      console.error(err);
    }
  }
}
