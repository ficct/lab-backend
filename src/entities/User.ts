import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movement } from './Movement';
import { Role } from './Role';
import { UserPlace } from './UserPlace';
import { UserTask } from './UserTask';

@Index('uid', ['uid'], { unique: true })
@Index('email', ['email'], { unique: true })
@Index('verifiedEmail', ['verifiedEmail'], { unique: true })
@Entity('User', { schema: 'ficct' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'uid', nullable: true, unique: true, length: 50 })
  uid?: string;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'email', unique: true, length: 50 })
  email: string;

  @Column('varchar', {
    name: 'verifiedEmail',
    nullable: true,
    unique: true,
    length: 50,
  })
  verifiedEmail?: string;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl?: string;

  @Column('varchar', { name: 'password', length: 255, select: false })
  password: string;

  @Column('varchar', { name: 'phoneNumber', nullable: true, length: 20 })
  phoneNumber?: string;

  @Column('varchar', { name: 'verifiedCode', nullable: true, length: 10 })
  verifiedCode?: string;

  @Column('bit', { name: 'isVerified', default: () => "'b'0''" })
  isVerified: boolean;

  @Column('int', { name: 'Roleid', select: false })
  roleid: number;

  @OneToMany(() => UserPlace, (userPlace) => userPlace.user)
  userPlaces: UserPlace[];

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTasks: UserTask[];

  @OneToMany(() => Movement, (movement) => movement.user)
  movements: Movement[];

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'Roleid', referencedColumnName: 'id' })
  role: Role;
}
