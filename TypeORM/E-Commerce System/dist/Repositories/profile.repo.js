"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../Configs/db");
const Profile_1 = require("../Entities/Profile");
const profileRepo = db_1.AppDataSource.getRepository(Profile_1.Profile);
