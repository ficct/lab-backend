import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Accessory {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) code: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'bool' }) high_drop: boolean;
}
