import { UserDto } from 'src/dtos/user.dto';
import { User } from 'src/models/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, name, lastname, code, ci, email } = data;

  const userDto: UserDto = {
    id,
    name,
    lastname,
    code,
    ci,
    email,
  };

  return userDto;
};
