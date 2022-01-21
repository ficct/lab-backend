import { Equipment } from './Equipment';
import { Movement } from './Movement';
import { PlaceType } from './PlaceType';
export declare class Place {
    id: number;
    code: string;
    name: string;
    description?: string;
    typeid: number;
    photoUrl?: string;
    photoId?: string;
    movements: Movement[];
    movements2: Movement[];
    type: PlaceType;
    places: Place[];
    equipments: Equipment[];
}
