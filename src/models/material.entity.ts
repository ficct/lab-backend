import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Material {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'varchar' }) measure: string;
  @Column({ type: 'int' }) quantity: number;
  @Column({ type: 'bool' }) high_drop: boolean;
}
