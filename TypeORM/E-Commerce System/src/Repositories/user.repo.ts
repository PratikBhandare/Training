import { User } from "../Entities/Users";
import { AppDataSource } from "../Configs/db";

export const userRepo = AppDataSource.getRepository(User);