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
Object.defineProperty(exports, "__esModule", { value: true });
const empService = require("../services/EmployeeService");
class EmployeeController {
    applyLeave(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let { id, empid, startDate, endDate, leaveType, status, reason } = req.body;
            console.log(id, empid, startDate, endDate, leaveType, status, reason);
            // console.log("Hello");
            yield empService.applyLeave(id, empid, startDate, endDate, leaveType, status, reason);
            resp.send("Done..");
        });
    }
    getLeaveByID(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            let data = yield empService.getLeaveByID(id);
            console.log("Data:", data);
            resp.send(data.recordset);
        });
    }
    getLeaveStatus(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            let data = yield empService.getLeaveStatus(id);
            console.log("Data:", data);
            resp.send(data.recordset);
        });
    }
}
exports.default = new EmployeeController();
