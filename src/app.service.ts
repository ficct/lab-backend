import mysqldump from 'mysqldump';

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { JobService } from './information/job/job.service';
import { CareerService } from './information/career/career.service';
import { SubjectService } from './information/subject/subject.service';

import { EquipmentTypeService } from './inventory/equipment/equipment-type/equipment-type.service';
import { EquipmentUnitService } from './inventory/equipment/equipment-unit/equipment-unit.service';
import { EquipmentBrandService } from './inventory/equipment/equipment-brand/equipment-brand.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger('BACKUP');

  constructor(
    // information
    private jobService: JobService,
    private careerService: CareerService,
    private subjectService: SubjectService,
    // inventory
    private unitService: EquipmentUnitService,
    private typeService: EquipmentTypeService,
    private brandService: EquipmentBrandService,
  ) {}

  get DB_connection() {
    return {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: Number.parseInt(process.env.DB_PORT),
    };
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  backupDB(): void {
    Promise.all([
      mysqldump({
        connection: this.DB_connection,
        dumpToFile: 'export/struct.sql',
        dump: { data: false },
      }),
      mysqldump({
        connection: this.DB_connection,
        dumpToFile: 'export/data.sql',
        dump: {
          schema: false,
          trigger: false,
          excludeTables: false,
        },
      }),
    ])
      .then(() => this.logger.log(`BACKUP DONE, ${new Date()}`))
      .catch((e) => this.logger.error(e));
  }

  async seedDB() {
    try {
      // information
      await this.jobService.seed();
      const careers = await this.careerService.seed();
      await this.subjectService.seed(careers);
      // inventory
      await Promise.all([
        this.typeService.seed(),
        this.unitService.seed(),
        this.brandService.seed(),
      ]);
    } catch (err) {
      console.error(err);
    }
  }
}
