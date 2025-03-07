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
const User = require("../Models/User");
const UserService = require("../Services/UserService");
class UserController {
    getAllUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserService.getAllUsers();
                console.log(users);
                resp.send(users);
            }
            catch (err) {
                console.log(err);
                resp.send("Error");
            }
        });
    }
    getUserByid(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("iNSIDE gETUSER");
                // console.log(req);
                let id = req.params.id;
                console.log(id);
                const data = yield UserService.getUserById(id);
                resp.send(data);
            }
            catch (err) {
            }
        });
    }
    deletUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserService.deletUsers();
                resp.send("Deleted Succesfulluy!!");
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    addUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, isActive } = req.body;
                console.log(req.body);
                yield UserService.adduser(id, name, isActive);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    updateUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update");
                const id = req.params.id;
                const { isActive } = req.body;
                yield UserService.updateUser(id, isActive);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
module.exports = new UserController();
