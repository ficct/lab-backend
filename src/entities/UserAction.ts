import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserAction', { schema: 'ficct' })
export class UserAction {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('int', { name: 'Userid' })
  userid: number;
}
