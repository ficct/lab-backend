import { Column, Entity, Index, OneToMany } from 'typeorm';
import { UserPlace } from './UserPlace';
import { UserTask } from './UserTask';

@Index('email', ['email'], { unique: true })
@Index('uid', ['uid'], { unique: true })
@Index('verifiedEmail', ['verifiedEmail'], { unique: true })
@Entity('User', { schema: 'ficct' })
export class User {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'uid', nullable: true, unique: true, length: 50 })
  uid: string | null;

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
  verifiedEmail: string | null;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl: string | null;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'phoneNumber', nullable: true, length: 20 })
  phoneNumber: string | null;

  @Column('varchar', { name: 'verifiedCode', nullable: true, length: 10 })
  verifiedCode: string | null;

  @Column('bit', { name: 'isVerified', default: () => "'b'0''" })
  isVerified: boolean;

  @Column('int', { name: 'Roleid' })
  roleid: number;

  @OneToMany(() => UserPlace, (userPlace) => userPlace.user)
  userPlaces: UserPlace[];

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTasks: UserTask[];
}
