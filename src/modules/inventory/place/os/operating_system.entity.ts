import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OperatingSystem {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}
