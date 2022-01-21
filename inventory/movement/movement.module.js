"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Movement_1 = require("../../entities/Movement");
const MovementReason_1 = require("../../entities/MovementReason");
const movement_service_1 = require("./movement.service");
const movement_reason_service_1 = require("./movement-reason/movement-reason.service");
const movement_controller_1 = require("./movement.controller");
const movement_reason_controller_1 = require("./movement-reason/movement-reason.controller");
let MovementModule = class MovementModule {
};
MovementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Movement_1.Movement, MovementReason_1.MovementReason])],
        controllers: [movement_controller_1.MovementController, movement_reason_controller_1.MovementReasonController],
        providers: [movement_service_1.MovementService, movement_reason_service_1.MovementReasonService],
    })
], MovementModule);
exports.MovementModule = MovementModule;
//# sourceMappingURL=movement.module.js.map