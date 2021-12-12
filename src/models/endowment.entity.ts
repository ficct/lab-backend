import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Place } from '../modules/inventory/place/place.entity';
@Entity()
export class Endowment {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'bool' }) validated: boolean;
  @Column({ type: 'bool' }) high_drop: boolean;
  // RELATIONS:
  @ManyToOne(() => Place, (place) => place.endowments)
  place: Place;
}
