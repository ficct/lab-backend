import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class University {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) abbreviation: string;
}
