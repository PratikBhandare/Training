import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Profile } from "./Profile";
import { Orders } from "./Orders";



@Entity("UsersTable110")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255 })
    email!: string;

    @OneToOne(()=>Profile,{cascade:true})
    @JoinColumn()
    profile!:Profile;

    @OneToMany(()=>Orders,(order)=>{
        order.id
    })
    order!:Orders[];
}