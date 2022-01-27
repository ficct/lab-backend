import { ApiExcludeController } from '@nestjs/swagger';
import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { Response } from 'express';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  getDocs(@Res() res: Response) {
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
