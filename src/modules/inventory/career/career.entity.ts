import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Faculty } from '../faculty/faculty.entity';

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
