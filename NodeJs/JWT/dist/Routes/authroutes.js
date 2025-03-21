"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require("express");
const authcontroller_1 = __importDefault(require("../controller/authcontroller"));
const authRouter = express.Router();
authRouter.post("/login", authcontroller_1.default.login);
module.exports = authRouter;
