import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { toUserDto } from 'src/utils/mapper';
import { comparePasswords } from 'src/utils/utils';

import { User } from 'src/modules/users/user/user.entity';
import { UserDto } from 'src/modules/inventory/equipment/loads/user.dto';
import { LoginUserDto } from 'src/modules/inventory/equipment/loads/user-login.dto';
import { CreateUserDto } from 'src/modules/inventory/equipment/loads/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findOne(options?: any): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.findOne({ where: { email } });
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { name, lastname, code, ci, email, password } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({ where: { email } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: User = await this.userRepo.create({
      name,
      lastname,
      code,
      ci,
      password,
      email,
      high_drop: true,
    });

    await this.userRepo.save(user);

    return toUserDto(user);
  }

  private _sanitizeUser(user: User) {
    delete user.password;
    return user;
  }
}
