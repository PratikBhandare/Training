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
const database_1 = require("../config/database");
class EmployeeRepo {
    applyLeave(id, empid, startDate, endDate, leaveType, status, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield database_1.poolPromise;
            // console.log(pool)
            console.log("In repo");
            // console.log(typeof id, typeof empid, typeof startDate,typeof endDate,typeof leaveType,typeof status,typeof reason);
            yield pool.request().query(`insert into leaves2030 values (${empid},'${startDate}','${endDate}','${leaveType}','${status}','${reason}')`);
            //    return; 
        });
    }
    getLeaveByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield database_1.poolPromise;
            let result = yield pool.request().query(`select * from leaves2030  where empID=${id}`);
            console.log(result);
            return result;
        });
    }
    getLeaveStatus() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
module.exports = new EmployeeRepo();
