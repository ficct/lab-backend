import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Report } from 'src/models/report.entity';
import { ReportService } from 'src/services/report.service';

@Crud({
  model: {
    type: Report,
  },
})
@Controller('reports')
export class ReportController implements CrudController<Report> {
  constructor(public service: ReportService) {}
}
