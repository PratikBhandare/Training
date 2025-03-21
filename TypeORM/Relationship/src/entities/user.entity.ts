import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Profile_J3 } from "./profile.entity";

@Entity("Usertblp110")
export class User_J3 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @OneToOne(() => Profile_J3, (profile) => profile.user,{cascade:true})
    profile: Profile_J3;
}