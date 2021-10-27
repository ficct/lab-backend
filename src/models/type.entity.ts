import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Type {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'bool' }) high_drop: boolean; // Alta-Baja
}
