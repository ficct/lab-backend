import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  ci: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  createdOn?: Date;
}
