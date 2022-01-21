import { User } from './User';
import { Place } from './Place';
export declare class UserPlace {
    userid: number;
    placeid: number;
    startTime: number;
    endTime: number;
    startDate: string;
    endDate: string;
    user: User;
    place: Place;
}
