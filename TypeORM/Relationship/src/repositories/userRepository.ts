import { AppDataSource } from "../config/db";
import { User_J3} from "../entities/user.entity";

export const userRepository=AppDataSource.getRepository(User_J3);
