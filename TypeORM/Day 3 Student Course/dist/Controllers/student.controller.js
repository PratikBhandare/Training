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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const student_service_1 = __importDefault(require("../Services/student.service"));
class studetController {
    createStudent(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = req.body;
            yield student_service_1.default.createStudent(student);
            resp.send("Done...");
        });
    }
    asignCourse(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const sid = Number(req.params.sid);
            const cids = req.body.cids;
            yield student_service_1.default.asignCourse(sid, cids);
            resp.send("Succes..");
        });
    }
    getStudents(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield student_service_1.default.getStudents();
            resp.send("Done..");
        });
    }
}
module.exports = new studetController();
