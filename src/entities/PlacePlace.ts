import { Column, Entity, Index } from 'typeorm';

@Index('FKPlace_Plac26955', ['placeChildId'], {})
@Entity('Place_Place', { schema: 'ficct' })
export class PlacePlace {
  @Column('int', { primary: true, name: 'placeParent_id' })
  placeParentId: number;

  @Column('int', { primary: true, name: 'placeChild_id' })
  placeChildId: number;
}
