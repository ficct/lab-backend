import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('name', ['name'], { unique: true })
@Entity('Role', { schema: 'ficct' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 255 })
  name: string;
}
