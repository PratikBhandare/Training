import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./Users";



@Entity("ProfileTable110")
export class Profile {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    Bio!: string;

    @OneToOne(()=>User)
    @JoinColumn()
    user!:User;

}