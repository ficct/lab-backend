import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { User } from './User';
import { Place } from './Place';

@Index('FKUser_Place372007', ['placeid'], {})
@Entity('User_Place', { schema: 'ficct' })
export class UserPlace {
  @Column('int', { primary: true, name: 'Userid' })
  userid: number;

  @Column('int', { primary: true, name: 'Placeid' })
  placeid: number;

  @Column('int', { name: 'startTime' })
  startTime: number;

  @Column('int', { name: 'endTime' })
  endTime: number;

  @Column('date', { name: 'startDate' })
  startDate: string;

  @Column('date', { name: 'endDate' })
  endDate: string;

  @ManyToOne(() => User, (user) => user.userPlaces, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Userid', referencedColumnName: 'id' }])
  user: User;

  @JoinColumn([{ name: 'Placeid', referencedColumnName: 'id' }])
  place: Place;
}
