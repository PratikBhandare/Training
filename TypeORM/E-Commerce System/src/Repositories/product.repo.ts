
import { AppDataSource } from "../Configs/db";
import { Product } from "../Entities/Products";

export const productRepo = AppDataSource.getRepository(Product);

export async function addProduct(product:any){
    productRepo.save(product);

}

