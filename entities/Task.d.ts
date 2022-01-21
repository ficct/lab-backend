import { UserTask } from './UserTask';
export declare class Task {
    id: number;
    name: string;
    description: string | null;
    deadLine: string;
    status: boolean;
    placeid: number | null;
    photoUrl: string | null;
    userTasks: UserTask[];
}
