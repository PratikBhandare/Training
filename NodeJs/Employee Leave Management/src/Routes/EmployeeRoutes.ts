
import express from "express";
// const empController = require("../controllers/EmployeeController");

import EmployeeController from "../controllers/EmployeeController";
// const EmployeeController = require("../controllers/EmployeeController")

const router = express.Router();
// console.log("This is EmployeController",EmployeeController.applyLeave);



router.post("/leaves",EmployeeController.applyLeave);
// router.get("/leaves/leaveStatus",EmployeeController.getLeaveByID)
router.get("/leaves/:id",EmployeeController.getLeaveByID)


module.exports=router;