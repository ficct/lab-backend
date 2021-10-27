import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Career {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) plan: string;
  @Column({ type: 'int' }) level: number;
}
