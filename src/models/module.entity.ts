import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Faculty } from './faculty.entity';
@Entity()
export class Module {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) identification: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.modules)
  faculty: Faculty;
}
