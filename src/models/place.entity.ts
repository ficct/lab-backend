import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Place {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) place_code: string;
  @Column({ type: 'int' }) capacity: number;
  @Column({ type: 'bool' }) high_drop: boolean; // Alta-Baja
}
