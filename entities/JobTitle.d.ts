export declare class JobTitle {
    id: number;
    name: string;
    description?: string;
    supJobTitleId?: number;
    supJob: JobTitle;
    subJobs: JobTitle[];
}
