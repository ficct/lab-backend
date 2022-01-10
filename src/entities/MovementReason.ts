import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movement } from './Movement';

@Index('name', ['name'], { unique: true })
@Entity('MovementReason', { schema: 'ficct' })
export class MovementReason {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 20 })
  name: string;

  @OneToMany(() => Movement, (movement) => movement.reason)
  movements: Movement[];
}
