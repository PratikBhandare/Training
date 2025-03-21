"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.dbconnect)();
app.use("/", registerRoutes_1.default);
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
