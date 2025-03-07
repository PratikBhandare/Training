"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const empController = require("../controllers/EmployeeController");
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
// const EmployeeController = require("../controllers/EmployeeController")
const router = express_1.default.Router();
// console.log("This is EmployeController",EmployeeController.applyLeave);
router.post("/leaves", EmployeeController_1.default.applyLeave);
// router.get("/leaves/leaveStatus",EmployeeController.getLeaveByID)
router.get("/leaves/:id", EmployeeController_1.default.getLeaveByID);
module.exports = router;
