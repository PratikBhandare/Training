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
const authservice_1 = __importDefault(require("../Services/authservice"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    login(req, resp) {
        let user = req.body;
        let paylod = { email: user.email };
        let token = jsonwebtoken_1.default.sign(paylod, "hello", { expiresIn: "1h" });
        resp.send(token);
    }
    getData(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Hello");
            let r = yield authservice_1.default.getUser(req.body.email);
            resp.send(r);
        });
    }
}
module.exports = new AuthController();
