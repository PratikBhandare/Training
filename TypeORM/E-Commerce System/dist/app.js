"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./Configs/db");
const student_1 = __importDefault(require("./Routes/student"));
const course_1 = __importDefault(require("./Routes/course"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("Server is started...");
});
app.use("/student", student_1.default);
app.use("/course", course_1.default);
db_1.AppDataSource.initialize()
    .then(() => {
    console.log("Connected to sql server...");
})
    .catch((err) => {
    console.log(err);
});
