"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRepository = void 0;
const db_1 = require("../config/db");
const profile_entity_1 = require("../entities/profile.entity");
exports.profileRepository = db_1.AppDataSource.getRepository(profile_entity_1.Profile_J3);
