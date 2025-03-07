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
class AdminRepo {
    getReport() {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield database_1.poolPromise;
            let result = yield pool.request().query("select l.empID, l.start_date,l.end_date,l.leave_type,l.status,l.reason from employee2030 e join leaves2030 l on e.id = l.empID ");
            return (result);
        });
    }
}
module.exports = new AdminRepo();
