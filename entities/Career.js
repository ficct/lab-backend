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
exports.Career = void 0;
const typeorm_1 = require("typeorm");
const Subject_1 = require("./Subject");
let Career = class Career {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Career.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'creationDate' }),
    __metadata("design:type", String)
], Career.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', unique: true, length: 10 }),
    __metadata("design:type", String)
], Career.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'duration' }),
    __metadata("design:type", Number)
], Career.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'educationLevel', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "educationLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'academicTitle', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "academicTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'midTitle', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "midTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nationalTitle', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "nationalTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fax', length: 20 }),
    __metadata("design:type", String)
], Career.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 100 }),
    __metadata("design:type", String)
], Career.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'blog', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Career.prototype, "blog", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Career.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'web', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Career.prototype, "web", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Placeid', nullable: true }),
    __metadata("design:type", Number)
], Career.prototype, "placeid", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Subject_1.Subject, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'Subject_Career',
        joinColumn: { name: 'Careerid', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'Subjectid', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Career.prototype, "subjects", void 0);
Career = __decorate([
    (0, typeorm_1.Index)('code', ['code'], { unique: true }),
    (0, typeorm_1.Entity)('Career', { schema: 'ficct' })
], Career);
exports.Career = Career;
//# sourceMappingURL=Career.js.map