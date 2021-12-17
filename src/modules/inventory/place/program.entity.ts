import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Program {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) version: string;
}
