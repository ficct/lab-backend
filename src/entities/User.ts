import bcrypt from 'bcrypt';

import {
  Index,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';

import { Role } from './Role';
import { Movement } from './Movement';
import { UserTask } from './UserTask';
import { UserPlace } from './UserPlace';

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
