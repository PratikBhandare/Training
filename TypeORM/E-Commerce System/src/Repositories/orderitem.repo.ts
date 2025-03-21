
import { AppDataSource } from "../Configs/db";
import { OrderItem } from "../Entities/OrderItem";

export const orderItemRepo = AppDataSource.getRepository(OrderItem);