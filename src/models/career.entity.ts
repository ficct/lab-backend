import { Faculty } from 'src/models/faculty.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class Career {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) plan: string;
  @Column({ type: 'int' }) level: number;

  // RELATIONS:
  @ManyToOne(() => Faculty, (faculty) => faculty.careers)
  faculty: Faculty;
}
