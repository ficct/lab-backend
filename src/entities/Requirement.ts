import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('FKRequiremen264442', ['subjectPreqId'], {})
@Index('FKRequiremen227209', ['subjectReqId'], {})
@Entity('Requirement', { schema: 'ficct' })
export class Requirement {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'subjectReqId' })
  subjectReqId: number;

  @Column('int', { name: 'subjectPreqId' })
  subjectPreqId: number;

  @Column('int', { name: 'Careerid' })
  careerid: number;
}
