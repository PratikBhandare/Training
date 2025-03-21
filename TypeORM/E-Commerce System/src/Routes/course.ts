import express from "express";
import courseController from "../Controllers/course.controller";

const courseRouter = express.Router();

courseRouter.post("/create",courseController.createCourse);

export =courseRouter;