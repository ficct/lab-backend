import { User } from './User';
import { Place } from './Place';
import { Equipment } from './Equipment';
import { MovementReason } from './MovementReason';
export declare class Movement {
    id: number;
    reasonid: number;
    description?: string;
    equipmentid: number;
    placeFromId?: number;
    placeToId?: number;
    userid?: number;
    reason: MovementReason;
    placeTo: Place;
    equipment: Equipment;
    placeFrom: Place;
    user: User;
}
