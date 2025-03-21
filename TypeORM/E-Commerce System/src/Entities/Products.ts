import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, OrderedBulkOperation, OneToMany } from "typeorm";
import { Orders } from "./Orders";
import { OrderItem } from "./OrderItem";




@Entity("ProductsTable110")
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @ManyToMany(()=>Orders,(order)=>order.id)
    order!:Orders;

    @OneToMany(()=>OrderItem,(order)=>{
        order.id
    })
    orderItem!:OrderItem[];

    

    
}