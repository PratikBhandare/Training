"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const student_controller_1 = __importDefault(require("../Controllers/student.controller"));
const studentRouter = express_1.default.Router();
studentRouter.post("/signUp", student_controller_1.default.createStudent);
studentRouter.post("/assignCourse/:sid", student_controller_1.default.asignCourse);
studentRouter.get("/getstudents", student_controller_1.default.getStudents);
module.exports = studentRouter;
