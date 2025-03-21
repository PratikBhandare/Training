import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Product } from "./Products";
import { User } from "./Users";




@Entity("OrdersTable110")
export class Orders {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'date' })
    Date!: string;


    @ManyToMany(()=>Product,(product)=>product.id)
    @JoinTable()
    product!:Product[];


    @ManyToOne(()=>User,(user)=>{
        user.id
    })
    user!:User;

    

    
}