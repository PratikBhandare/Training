"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const db_1 = require("../config/db");
const user_entity_1 = require("../entities/user.entity");
exports.userRepository = db_1.AppDataSource.getRepository(user_entity_1.User_J3);
