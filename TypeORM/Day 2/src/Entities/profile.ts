
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity("profiletbl110")
export class Profile{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    Bio!:String;


    @OneToOne(() => User, (user) => user.profileId) // specify inverse side as a second parameter
    userId!: User;


    


}