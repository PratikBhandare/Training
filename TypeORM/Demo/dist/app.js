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
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const student_1 = require("./student");
require("reflect-metadata");
const app = (0, express_1.default)();
app.listen(process.env.PORT, () => {
    console.log("Server is started");
});
const studentRepository = database_1.AppDataSource.getTreeRepository(student_1.Student);
database_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected to sqlserver...");
    const student = studentRepository.create({
        id: 1,
        name: "Pratik",
        email: "pratik@gmail.com"
    });
    studentRepository.save(student);
}))
    .catch((err) => {
    console.log(err);
});
