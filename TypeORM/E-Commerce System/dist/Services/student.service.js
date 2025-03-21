"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const course_repo_1 = require("../Repositories/course.repo");
const student_repo_1 = require("../Repositories/student.repo");
class studentService {
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            if (student.courses == undefined) {
                student.courses = [];
            }
            yield student_repo_1.studentRepo.save(student);
        });
    }
    asignCourse(sid, cids) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(cids);
            let student = yield student_repo_1.studentRepo.findOne({
                relations: {
                    courses: true
                },
                where: { id: sid }
            });
            // console.log(student!.courses);
            for (let i = 0; i < cids.length; i++) {
                let course = yield course_repo_1.courseRepo.findOneBy({ id: cids[i] });
                student.courses.push(course);
                // console.log("Hello");
            }
            yield student_repo_1.studentRepo.save(student);
            console.log(student.courses);
        });
    }
}
module.exports = new studentService();
