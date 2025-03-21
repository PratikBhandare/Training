"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemRepo = void 0;
const db_1 = require("../Configs/db");
const OrderItem_1 = require("../Entities/OrderItem");
exports.orderItemRepo = db_1.AppDataSource.getRepository(OrderItem_1.OrderItem);
