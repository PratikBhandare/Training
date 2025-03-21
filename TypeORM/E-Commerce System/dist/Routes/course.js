"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const course_controller_1 = __importDefault(require("../Controllers/course.controller"));
const courseRouter = express_1.default.Router();
courseRouter.post("/create", course_controller_1.default.createCourse);
module.exports = courseRouter;
