import { ApiProperty } from '@nestjsx/crud/lib/crud';

import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Place } from '../place/place.entity';
import { Accessory } from '../accessory/accessory.entity';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn() id: number;

  @ApiProperty({
    description: 'Código unico del equipo. Ejemplo: U070312462213',
  })
  @Column({ type: 'varchar', unique: true, nullable: false })
  code: string;

  @ApiProperty({
    description: 'Breve descripción del equipo',
  })
  @Column({ type: 'varchar' })
  description: string;

  @ApiProperty({
    description: 'Propiedad que define si está disponible el equipo.',
  })
  @Column({ type: 'bool' })
  is_available: boolean;

  @ApiProperty({ description: 'Propiedad que define si es prestable.' })
  @Column({ type: 'bool' })
  loanable: boolean;

  @ApiProperty({ description: 'Alta Baja.' })
  @Column({ type: 'bool' })
  high_drop: boolean;

  // RELATIONS:
  @ManyToOne(() => Place, (place) => place.equipments)
  place: Place;

  @OneToMany(() => Accessory, (accessory) => accessory.equipment)
  accesories: Accessory[];
}
