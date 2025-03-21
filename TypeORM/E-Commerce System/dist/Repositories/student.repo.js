"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRepo = void 0;
const student_1 = require("../Entities/student");
const db_1 = require("../Configs/db");
exports.studentRepo = db_1.AppDataSource.getRepository(student_1.Student);
