import express from "express";
import studentController from "../Controllers/student.controller";

const studentRouter = express.Router();

studentRouter.post("/signUp",studentController.createStudent)
studentRouter.post("/assignCourse/:sid",studentController.asignCourse)

export =studentRouter;