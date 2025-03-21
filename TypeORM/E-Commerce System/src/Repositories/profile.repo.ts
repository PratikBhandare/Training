
import { AppDataSource } from "../Configs/db";
import { Profile } from "../Entities/Profile";

const profileRepo = AppDataSource.getRepository(Profile);




