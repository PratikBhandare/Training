"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepo = void 0;
const Users_1 = require("../Entities/Users");
const db_1 = require("../Configs/db");
exports.userRepo = db_1.AppDataSource.getRepository(Users_1.User);
