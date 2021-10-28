import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn() id: number;

  @ApiProperty({
    description: 'Código unico del equipo. Ejemplo: U070312462213',
  })
  @Column({ type: 'varchar' })
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
}
