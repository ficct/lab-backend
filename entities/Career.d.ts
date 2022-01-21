import { Subject } from './Subject';
export declare class Career {
    id: number;
    creationDate: string;
    code: string;
    name: string;
    duration: number;
    educationLevel: string;
    academicTitle: string;
    midTitle: string;
    nationalTitle: string;
    fax: string;
    email: string;
    blog?: string;
    location?: string;
    web?: string;
    placeid?: number;
    subjects: Subject[];
}
