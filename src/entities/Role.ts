import {
  Index,
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './User';

@Index('name', ['name'], { unique: true })
@Entity('Role', { schema: 'ficct' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 255 })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
