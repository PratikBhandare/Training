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
exports.User_J3 = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
let User_J3 = class User_J3 {
};
exports.User_J3 = User_J3;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User_J3.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], User_J3.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], User_J3.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile_J3, (profile) => profile.user, { cascade: true }),
    __metadata("design:type", profile_entity_1.Profile_J3)
], User_J3.prototype, "profile", void 0);
exports.User_J3 = User_J3 = __decorate([
    (0, typeorm_1.Entity)("Usertblp110")
], User_J3);
