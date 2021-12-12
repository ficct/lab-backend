import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Faculty } from '../faculty/faculty.entity';
@Entity()
export class University {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar', nullable: true }) abbreviation: string;
  @OneToMany(() => Faculty, (faculty) => faculty.university, { cascade: true })
  faculties: Faculty[];
}
