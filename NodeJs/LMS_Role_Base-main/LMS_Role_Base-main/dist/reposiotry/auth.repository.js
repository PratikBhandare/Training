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
const pool_1 = require("../config/pool");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class authRepository {
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, role } = data;
                const user = (yield pool_1.pool).request().input('email', email).query(`SELECT * FROM users WHERE email = @email`);
                if ((yield user).recordset.length === 0) {
                    return { status: 404, message: "User not found" };
                }
                const originalpassword = (yield user).recordset[0].password;
                if (bcryptjs_1.default.compareSync(password, originalpassword) === false) {
                    return { status: 400, message: "Password incorrect" };
                }
                const token = jsonwebtoken_1.default.sign({ email: email, role: role }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
                return { status: 200, token: token };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, role, name } = data;
                const user = (yield pool_1.pool).request().input('email', email).query(`SELECT * FROM users WHERE email = @email`);
                if ((yield user).recordset.length > 0) {
                    return { status: 400, message: "User already exists" };
                }
                const salt = bcryptjs_1.default.genSaltSync(5);
                const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
                const newUser = (yield pool_1.pool).request().input('name', name).input('email', email).input('password', hashedPassword).input('role', role).query(`INSERT INTO users (name,email,password,role) VALUES (@name,@email,@password,@role)`);
                return { status: 200, message: "User created" };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
}
exports.default = new authRepository();
