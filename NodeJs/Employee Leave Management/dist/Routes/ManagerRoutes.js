"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ManagerController = require("../controllers/ManagerController");
router.get("/leaves/pending", ManagerController.getAllPendingLeaves);
router.put("/leaves/:id/approve", ManagerController.approveLeave);
router.put("/leaves/:id/reject", ManagerController.rejectLeave);
module.exports = router;
