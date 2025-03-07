
import express from "express";
const AdminController = require("../controllers/AdminController")
const router = express.Router();

router.get("/leaves/report",AdminController.getReport)


module.exports=router;