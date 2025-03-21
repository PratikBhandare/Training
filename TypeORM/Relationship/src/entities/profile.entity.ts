import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User_J3 } from "./user.entity";

@Entity("Profiletblp110")
export class Profile_J3 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    bio: string;

    @OneToOne(() => User_J3,(user)=>user.profile,{onDelete:"CASCADE"})
    @JoinColumn({name:'user_Id'})
    user: User_J3;
}