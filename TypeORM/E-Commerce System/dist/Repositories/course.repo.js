"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRepo = void 0;
const course_1 = require("../Entities/course");
const db_1 = require("../Configs/db");
exports.courseRepo = db_1.AppDataSource.getRepository(course_1.Course);
