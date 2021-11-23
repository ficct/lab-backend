import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Allocation {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) code: string;
}
