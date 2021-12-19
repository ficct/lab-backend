import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  ci: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
