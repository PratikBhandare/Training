"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./Config/db");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(4000, () => {
    console.log("Server is started...");
});
db_1.AppDataSource.initialize().then(() => {
    console.log("connected To SQL....");
})
    .catch((err) => {
    console.log(err);
});
