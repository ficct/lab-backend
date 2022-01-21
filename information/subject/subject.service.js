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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const Subject_1 = require("../../entities/Subject");
let SubjectService = class SubjectService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    async getSubjectWithQuery(query) {
        const { limit, page, careerId, semester } = query;
        if (careerId && semester) {
            return this.repo
                .createQueryBuilder('s')
                .distinct(true)
                .leftJoin('s.requires', 'requires')
                .leftJoin('s.isRequiredBy', 'isRequiredBy')
                .leftJoin('s.subjectCareers', 'sc')
                .where(`sc.careerid = ${careerId}`)
                .andWhere(`sc.semester = ${semester}`)
                .take(limit)
                .skip(limit * page)
                .getMany();
        }
        return this.repo.find({
            take: limit,
            skip: limit * page,
        });
    }
    getOne(req) {
        const [paramId] = req.parsed.paramsFilter;
        return this.repo.findOne(paramId.value, {
            relations: ['requires', 'isRequiredBy'],
        });
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Subject_1.Subject)),
    __metadata("design:paramtypes", [Object])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map