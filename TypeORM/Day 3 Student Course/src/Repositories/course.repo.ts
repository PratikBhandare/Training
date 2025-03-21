import { Course } from "../Entities/course";
import { AppDataSource } from "../Configs/db";

export const courseRepo=  AppDataSource.getRepository(Course);


