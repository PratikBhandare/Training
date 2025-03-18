"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyjwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyjwt = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        if (req.user.role !== 'admin') {
            return res.status(403).send({ auth: false, message: 'You are not authorized' });
        }
        next();
    }
    catch (error) {
        res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
    }
};
exports.verifyjwt = verifyjwt;
