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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectCareer = void 0;
const typeorm_1 = require("typeorm");
const Subject_1 = require("./Subject");
let SubjectCareer = class SubjectCareer {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Subjectid' }),
    __metadata("design:type", Number)
], SubjectCareer.prototype, "subjectid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Careerid' }),
    __metadata("design:type", Number)
], SubjectCareer.prototype, "careerid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'semester' }),
    __metadata("design:type", Number)
], SubjectCareer.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Subject_1.Subject, (subject) => subject.subjectCareers, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'Subjectid', referencedColumnName: 'id' }),
    __metadata("design:type", Subject_1.Subject)
], SubjectCareer.prototype, "subject", void 0);
SubjectCareer = __decorate([
    (0, typeorm_1.Index)('FKSubject_Ca801092', ['careerid'], {}),
    (0, typeorm_1.Entity)('Subject_Career', { schema: 'ficct' })
], SubjectCareer);
exports.SubjectCareer = SubjectCareer;
//# sourceMappingURL=SubjectCareer.js.map