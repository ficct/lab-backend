import { JwtService } from '@nestjs/jwt';

import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';

import { User } from 'entities/User';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOne({ where: { email } });

    if (user) {
      return 'user Not Found';
    }

    if (!user.checkPassword(pass)) {
      return 'Wrong password';
    }

    return user;
  }

  async login(user: User) {
    const payload = { id: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
