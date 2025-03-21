
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
@Entity("usertbl110")
export class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:String;

    @Column()
    email!:String;


    @OneToOne(() => Profile, (profile) => profile.userId) // specify inverse side as a second parameter
    @JoinColumn()
    profileId!: Profile


}