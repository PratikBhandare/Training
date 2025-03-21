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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = validateUser;
exports.jwtAuth = jwtAuth;
// const jwt = require("jsonwebtoken");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require("bcrypt");
const authservice_1 = __importDefault(require("../Services/authservice"));
function validateUser(req, resp, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Hello From Middleware");
        let user = req.body;
        console.log(user);
        // return;
        let User = yield authservice_1.default.getUser(user.email);
        // console.log("This is User",User);
        if (!User) {
            console.log("Not Found");
            return;
        }
        else {
            if (User.email == user.email && user.password == User.password) {
                console.log("Succesfully Logged ...");
                next();
            }
        }
    });
}
function jwtAuth(req, resp, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeadersToken = req.headers.authorization;
        console.log(authHeadersToken);
        yield jsonwebtoken_1.default.verify(authHeadersToken, "hello", (err, data) => {
            console.log(data);
        });
        next();
    });
}
