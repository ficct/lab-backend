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
exports.UserAction = void 0;
const typeorm_1 = require("typeorm");
let UserAction = class UserAction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], UserAction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', length: 255 }),
    __metadata("design:type", String)
], UserAction.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Userid' }),
    __metadata("design:type", Number)
], UserAction.prototype, "userid", void 0);
UserAction = __decorate([
    (0, typeorm_1.Entity)('UserAction', { schema: 'ficct' })
], UserAction);
exports.UserAction = UserAction;
//# sourceMappingURL=UserAction.js.map