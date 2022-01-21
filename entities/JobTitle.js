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
var JobTitle_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobTitle = void 0;
const typeorm_1 = require("typeorm");
let JobTitle = JobTitle_1 = class JobTitle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], JobTitle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 100 }),
    __metadata("design:type", String)
], JobTitle.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'description', nullable: true }),
    __metadata("design:type", String)
], JobTitle.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'supJobTitleId', nullable: true, select: false }),
    __metadata("design:type", Number)
], JobTitle.prototype, "supJobTitleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => JobTitle_1, (jobTitle) => jobTitle.subJobs, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'supJobTitleId', referencedColumnName: 'id' }),
    __metadata("design:type", JobTitle)
], JobTitle.prototype, "supJob", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => JobTitle_1, (jobTitle) => jobTitle.supJob),
    (0, typeorm_1.JoinColumn)({ name: 'supJobTitleId', referencedColumnName: 'id' }),
    __metadata("design:type", Array)
], JobTitle.prototype, "subJobs", void 0);
JobTitle = JobTitle_1 = __decorate([
    (0, typeorm_1.Index)('FKJobTitle642966', ['supJobTitleId'], {}),
    (0, typeorm_1.Entity)('JobTitle', { schema: 'ficct' })
], JobTitle);
exports.JobTitle = JobTitle;
//# sourceMappingURL=JobTitle.js.map