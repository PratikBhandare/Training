"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const student_1 = require("./student");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mssql",
    database: "JIBE_Main_Training",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    entities: [student_1.Student],
    // logging:true,
    synchronize: true,
    options: {
        trustServerCertificate: true
    }
});
