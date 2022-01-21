"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const jobs_json_1 = require("./jobs.json");
const JobTitle_1 = require("../../entities/JobTitle");
let JobService = class JobService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    async getOne(req) {
        const [paramId] = req.parsed.paramsFilter;
        const job = await this.repo.findOne(paramId.value, {
            relations: ['subJobs'],
        });
        for (let index = 0; index < job.subJobs.length; index++) {
            const subJob = job.subJobs[index];
            paramId.value = subJob.id;
            req.parsed.paramsFilter = [paramId];
            job.subJobs[index] = await this.getOne(req);
        }
        return job;
    }
    async seedJobs(jobs = [], supJobTitleId) {
        for (const { name, subJobs } of jobs) {
            const job = await this.repo.create({ name, supJobTitleId });
            await this.seedJobs(subJobs, job.id);
        }
    }
    async seed() {
        try {
            const jobCount = await this.repo.count();
            if (jobCount) {
                await this.seedJobs([jobs_json_1.job]);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
};
JobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(JobTitle_1.JobTitle)),
    __metadata("design:paramtypes", [Object])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map