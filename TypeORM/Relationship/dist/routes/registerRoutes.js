"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = require("../controllers/registerController");
const registerRouter = (0, express_1.Router)();
registerRouter.post("/register", registerController_1.RegisterController.registerUser);
exports.default = registerRouter;
