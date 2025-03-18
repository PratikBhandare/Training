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
const database_1 = require("../Config/database");
class AuthClass {
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let p = yield database_1.poolPromise;
            // console.log(email);
            try {
                let result = yield p.request().query(`select * from Users11010 where email='${email}'`);
                return result.recordset[0];
            }
            catch (err) {
                console.log(err);
                return;
            }
        });
    }
}
module.exports = new AuthClass();
