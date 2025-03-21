import { DataSource, OrderedBulkOperation } from "typeorm";
import "reflect-metadata";

import { User } from "../Entities/Users";
import { Profile } from "../Entities/Profile";
import { Product } from "../Entities/Products";
import { Orders } from "../Entities/Orders";
import { OrderItem } from "../Entities/OrderItem";


 
export const AppDataSource = new DataSource({
    type:'mssql',
    host:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port:1982,
    username:'j2',
    password:'123456',
    database:'JIBE_Main_Training',
    synchronize:true,
    // logging:true,
    entities: [User,Profile,Product,Orders,OrderItem],
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
})
 
 
