"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Users_1 = require("../Entities/Users");
const Profile_1 = require("../Entities/Profile");
const Products_1 = require("../Entities/Products");
const Orders_1 = require("../Entities/Orders");
const OrderItem_1 = require("../Entities/OrderItem");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql',
    host: 'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port: 1982,
    username: 'j2',
    password: '123456',
    database: 'JIBE_Main_Training',
    synchronize: true,
    // logging:true,
    entities: [Users_1.User, Profile_1.Profile, Products_1.Product, Orders_1.Orders, OrderItem_1.OrderItem],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});
