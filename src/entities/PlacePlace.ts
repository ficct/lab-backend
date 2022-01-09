import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Place } from './Place';

@Index('FKPlace_Plac26955', ['placeChildId'], {})
@Entity('Place_Place', { schema: 'ficct' })
export class PlacePlace {
  @Column('int', { primary: true, name: 'placeParent_id' })
  placeParentId: number;

  @Column('int', { primary: true, name: 'placeChild_id' })
  placeChildId: number;

  @ManyToOne(() => Place, (place) => place.placePlaces, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'placeChild_id', referencedColumnName: 'id' }])
  placeChild: Place;

  @ManyToOne(() => Place, (place) => place.placePlaces2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'placeParent_id', referencedColumnName: 'id' }])
  placeParent: Place;
}
