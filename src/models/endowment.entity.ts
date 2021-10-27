import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Endowment {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'bool' }) validated: boolean;
  @Column({ type: 'bool' }) high_drop: boolean;
}
