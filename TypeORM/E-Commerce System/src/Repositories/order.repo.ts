
import { AppDataSource } from "../Configs/db";

import { Orders } from "../Entities/Orders";

export const userRepo = AppDataSource.getRepository(Orders);