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
var Subject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
const typeorm_1 = require("typeorm");
const Career_1 = require("./Career");
const SubjectCareer_1 = require("./SubjectCareer");
let Subject = Subject_1 = class Subject {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Subject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', unique: true, length: 10 }),
    __metadata("design:type", String)
], Subject.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 100 }),
    __metadata("design:type", String)
], Subject.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'HT' }),
    __metadata("design:type", Number)
], Subject.prototype, "ht", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'HP' }),
    __metadata("design:type", Number)
], Subject.prototype, "hp", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'HS' }),
    __metadata("design:type", Number)
], Subject.prototype, "hs", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'CR' }),
    __metadata("design:type", Number)
], Subject.prototype, "cr", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Subject_1, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'Requirement',
        joinColumn: { name: 'subjectReqId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'subjectPreqId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Subject.prototype, "requires", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Subject_1, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'Requirement',
        joinColumn: { name: 'subjectPreqId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'subjectReqId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Subject.prototype, "isRequiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Career_1.Career, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'Subject_Career',
        joinColumn: { name: 'Subjectid', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'Careerid', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Subject.prototype, "careers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SubjectCareer_1.SubjectCareer, (subjectCareer) => subjectCareer.subject),
    __metadata("design:type", SubjectCareer_1.SubjectCareer)
], Subject.prototype, "subjectCareers", void 0);
Subject = Subject_1 = __decorate([
    (0, typeorm_1.Index)('code', ['code'], { unique: true }),
    (0, typeorm_1.Entity)('Subject', { schema: 'ficct' })
], Subject);
exports.Subject = Subject;
//# sourceMappingURL=Subject.js.map