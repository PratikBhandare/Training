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
const empRepo = require("../Repository/EmployeeRepo");
class EmployeeService {
    applyLeave(id, empid, startDate, endDate, leaveType, status, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("leave...");
            console.log(id, empid, startDate, endDate, leaveType, status, reason);
            empRepo.applyLeave(id, empid, startDate, endDate, leaveType, status, reason);
        });
    }
    getLeaveByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield empRepo.getLeaveByID(id);
            return data;
        });
    }
    getLeaveStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = empRepo.getLeaveByID(id);
            return data;
        });
    }
}
module.exports = new EmployeeService();
