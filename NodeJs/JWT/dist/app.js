"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const authcontroller_1 = __importDefault(require("./controller/authcontroller"));
const app = express();
app.use(express.json());
// app.post("/login",validateUser,authcontroller.getData)
app.post("/login", authcontroller_1.default.login);
app.listen(3000, (req, resp) => {
    console.log("Server is Started...");
});
