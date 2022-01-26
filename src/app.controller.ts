import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(
    private authService: AuthService,
    private readonly appService: AppService,
  ) {
    this.appService.seedDB().finally(() => null);
  }

  @Get()
  getDocs(@Res() res): string {
    return res.redirect('/api');
  }

  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return req.user;
  }
}
