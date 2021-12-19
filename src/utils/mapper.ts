import { User } from 'src/modules/users/user/user.entity';
import { UserDto } from 'src/modules/inventory/equipment/loads/user.dto';

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
