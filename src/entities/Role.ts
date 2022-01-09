import { Column, Entity, Index } from 'typeorm';

@Index('name', ['name'], { unique: true })
@Entity('Role', { schema: 'ficct' })
export class Role {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 255 })
  name: string;
}
