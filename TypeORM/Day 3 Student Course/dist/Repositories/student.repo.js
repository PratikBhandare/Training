"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRepo = void 0;
const student_1 = require("../Entities/student");
// import Student from "../Entities/student";
const db_1 = require("../Configs/db");
const studentRepo = db_1.AppDataSource.getRepository(student_1.Student);
exports.studentRepo = studentRepo;
