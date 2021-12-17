import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AccessoryStatus {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}
