import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Product } from "./Products";
import { User } from "./Users";




@Entity("OrderItemTable110")
export class OrderItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    Quantity!: Number;

    @Column({ type: 'int' })
    Price!: Number;

    @ManyToOne(()=>Product,(produt)=>{
        produt.id
    })
    product!:Product;




   

    
}