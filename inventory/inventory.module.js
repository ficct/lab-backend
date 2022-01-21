"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const place_module_1 = require("./place/place.module");
const movement_module_1 = require("./movement/movement.module");
const equipment_module_1 = require("./equipment/equipment.module");
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    (0, common_1.Module)({
        imports: [place_module_1.PlaceModule, equipment_module_1.EquipmentModule, movement_module_1.MovementModule],
        exports: [place_module_1.PlaceModule, equipment_module_1.EquipmentModule, movement_module_1.MovementModule],
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map