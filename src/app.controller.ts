import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags, ApiExcludeController } from '@nestjs/swagger';

import { AppService } from './app.service';
@ApiTags()
@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDocs(@Res() res): string {
    return res.redirect('/api');
  }
}
