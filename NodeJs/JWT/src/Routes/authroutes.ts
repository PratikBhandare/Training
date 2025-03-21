const express = require("express");
import authcontroller from "../controller/authcontroller";

const authRouter = express.Router();

authRouter.post("/login",authcontroller.login)

export=authRouter;