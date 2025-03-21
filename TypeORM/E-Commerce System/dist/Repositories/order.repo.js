"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepo = void 0;
const db_1 = require("../Configs/db");
const Orders_1 = require("../Entities/Orders");
exports.userRepo = db_1.AppDataSource.getRepository(Orders_1.Orders);
