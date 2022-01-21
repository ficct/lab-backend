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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeorm_1 = require("typeorm");
const Role_1 = require("./Role");
const Movement_1 = require("./Movement");
const UserTask_1 = require("./UserTask");
const UserPlace_1 = require("./UserPlace");
let User = class User {
    async hashPassword() {
        this.password = await bcrypt_1.default.hash(this.password, 10);
    }
    checkPassword(password) {
        return bcrypt_1.default.compare(password, this.password);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uid', nullable: true, unique: true, length: 50 }),
    __metadata("design:type", String)
], User.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 50 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', unique: true, length: 50 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'verifiedEmail',
        nullable: true,
        unique: true,
        length: 50,
    }),
    __metadata("design:type", String)
], User.prototype, "verifiedEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photoUrl', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', length: 255, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phoneNumber', nullable: true, length: 20 }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'verifiedCode', nullable: true, length: 10 }),
    __metadata("design:type", String)
], User.prototype, "verifiedCode", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'isVerified', default: () => "'b'0''" }),
    __metadata("design:type", Boolean)
], User.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Roleid', select: false }),
    __metadata("design:type", Number)
], User.prototype, "roleid", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserPlace_1.UserPlace, (userPlace) => userPlace.user),
    __metadata("design:type", Array)
], User.prototype, "userPlaces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserTask_1.UserTask, (userTask) => userTask.user),
    __metadata("design:type", Array)
], User.prototype, "userTasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Movement_1.Movement, (movement) => movement.user),
    __metadata("design:type", Array)
], User.prototype, "movements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role_1.Role, (role) => role.users),
    (0, typeorm_1.JoinColumn)({ name: 'Roleid', referencedColumnName: 'id' }),
    __metadata("design:type", Role_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Index)('uid', ['uid'], { unique: true }),
    (0, typeorm_1.Index)('email', ['email'], { unique: true }),
    (0, typeorm_1.Index)('verifiedEmail', ['verifiedEmail'], { unique: true }),
    (0, typeorm_1.Entity)('User', { schema: 'ficct' })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map