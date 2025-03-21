"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const student_1 = require("../Entities/student");
const course_1 = require("../Entities/course");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql',
    host: 'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port: 1982,
    username: 'j2',
    password: '123456',
    database: 'JIBE_Main_Training',
    synchronize: true,
    logging: true,
    entities: [course_1.Course, student_1.Student],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});
