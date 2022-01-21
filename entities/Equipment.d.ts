import { Place } from './Place';
import { Movement } from './Movement';
import { EquipmentUnit } from './EquipmentUnit';
import { EquipmentType } from './EquipmentType';
import { EquipmentBrand } from './EquipmentBrand';
export declare class Equipment {
    id: number;
    description: string;
    code: string;
    photoUrl?: string;
    state: string;
    observations?: string;
    unitid: number;
    placeid?: number;
    equipmentBrandid: number;
    equipmentTypeid: number;
    photoId?: string;
    equipmentType: EquipmentType;
    unit: EquipmentUnit;
    equipmentBrand: EquipmentBrand;
    movements: Movement[];
    place: Place;
}
