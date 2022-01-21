import { Career } from './Career';
import { SubjectCareer } from './SubjectCareer';
export declare class Subject {
    id: number;
    code: string;
    name: string;
    ht: number;
    hp: number;
    hs: number;
    cr: number;
    requires: Subject[];
    isRequiredBy: Subject[];
    careers: Career[];
    subjectCareers: SubjectCareer;
}
