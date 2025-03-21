"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const authroutes_1 = __importDefault(require("./Routes/authroutes"));
const authmiddleware_1 = require("./MiddleWare/authmiddleware");
const app = express();
app.use(express.json());
app.use("/auth", authroutes_1.default);
app.get("/check", authmiddleware_1.jwtAuth, () => {
    console.log("Completed...");
});
// app.post("/login",validateUser,authcontroller.getData)
// app.post("/login",authcontroller.login)
app.listen(3000, (req, resp) => {
    console.log("Server is Started...");
});
