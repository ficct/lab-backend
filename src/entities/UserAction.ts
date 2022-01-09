import { Column, Entity } from 'typeorm';

@Entity('UserAction', { schema: 'ficct' })
export class UserAction {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('int', { name: 'Userid' })
  userid: number;
}
