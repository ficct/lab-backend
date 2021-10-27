import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class EquipmentStatus {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}
