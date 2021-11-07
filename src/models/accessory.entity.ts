import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
@Entity()
export class Accessory {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) code: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'bool' }) high_drop: boolean;

  // RELATIONS:
  @ManyToOne(() => Equipment, (equipment) => equipment.accesories)
  equipment: Equipment;
}
