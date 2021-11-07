import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Place } from './place.entity';
@Entity()
export class Material {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'varchar' }) measure: string;
  @Column({ type: 'int' }) quantity: number;
  @Column({ type: 'bool' }) high_drop: boolean;

  // RELATIONS:
  @ManyToOne(() => Place, (place) => place.equipments)
  place: Place;
}
