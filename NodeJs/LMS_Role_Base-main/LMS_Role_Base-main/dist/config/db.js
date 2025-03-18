"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolConnect = exports.pool = void 0;
const mssql_1 = __importDefault(require("mssql"));
const mssql_2 = __importDefault(require("mssql"));
const config = {
    user: 'j2',
    password: '123456',
    server: 'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    database: 'JIBE_MAIN_TRAINING',
    port: 1982,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
const pool = new mssql_1.default.ConnectionPool(config);
exports.pool = pool;
const poolConnect = pool.connect();
exports.poolConnect = poolConnect;
exports.default = mssql_2.default;
