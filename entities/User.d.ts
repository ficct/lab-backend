import { Role } from './Role';
import { Movement } from './Movement';
import { UserTask } from './UserTask';
import { UserPlace } from './UserPlace';
export declare class User {
    id: number;
    uid?: string;
    name: string;
    email: string;
    verifiedEmail?: string;
    photoUrl?: string;
    password: string;
    phoneNumber?: string;
    verifiedCode?: string;
    isVerified: boolean;
    roleid: number;
    userPlaces: UserPlace[];
    userTasks: UserTask[];
    movements: Movement[];
    role: Role;
    hashPassword(): Promise<void>;
    checkPassword(password: string): Promise<boolean>;
}
