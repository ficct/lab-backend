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
exports.Requirement = void 0;
const typeorm_1 = require("typeorm");
let Requirement = class Requirement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Requirement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'subjectReqId' }),
    __metadata("design:type", Number)
], Requirement.prototype, "subjectReqId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'subjectPreqId' }),
    __metadata("design:type", Number)
], Requirement.prototype, "subjectPreqId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Careerid' }),
    __metadata("design:type", Number)
], Requirement.prototype, "careerid", void 0);
Requirement = __decorate([
    (0, typeorm_1.Index)('FKRequiremen264442', ['subjectPreqId'], {}),
    (0, typeorm_1.Index)('FKRequiremen227209', ['subjectReqId'], {}),
    (0, typeorm_1.Entity)('Requirement', { schema: 'ficct' })
], Requirement);
exports.Requirement = Requirement;
//# sourceMappingURL=Requirement.js.map