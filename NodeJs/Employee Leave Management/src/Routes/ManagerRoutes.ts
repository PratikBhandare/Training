
import express from "express";

const router = express.Router();

const ManagerController = require("../controllers/ManagerController")



router.get("/leaves/pending",ManagerController.getAllPendingLeaves);
router.put("/leaves/:id/approve",ManagerController.approveLeave);
router.put("/leaves/:id/reject",ManagerController.rejectLeave);


module.exports=router;