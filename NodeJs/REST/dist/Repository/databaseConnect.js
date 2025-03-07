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
const sql = require("mssql");
const { poolPromise } = require("../Config/database");
module.exports = { sql, poolPromise };
class UserRepo {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield poolPromise;
            const result = yield pool.request().query("Select * from users1101");
            return result.recordset;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield poolPromise;
            const result = yield pool.request().query(`Select * from users1101 where id=${id}`);
            return result.recordset;
        });
    }
    deletUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("In fun");
            const pool = yield poolPromise;
            yield pool.request().query(`Truncate table users1101`);
        });
    }
    addUser(id, name, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield poolPromise;
            yield pool.request().query(`Insert into users1101 values(${id},'${name}',${isActive})`);
        });
    }
    updateUser(id, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield poolPromise;
            yield pool.request().query(`Update  users1101 set isaActive=${isActive} where id=${id}`);
        });
    }
}
module.exports = new UserRepo();
