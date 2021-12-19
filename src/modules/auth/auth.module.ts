import { config } from 'dotenv';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from 'src/modules/auth/jwt/auth.controller';

import { AuthService } from 'src/modules/auth/jwt/auth.service';
import { JwtStrategy } from 'src/modules/auth/jwt/jwt.strategy';
import { UserModule } from '../users/user.module';

config();

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
