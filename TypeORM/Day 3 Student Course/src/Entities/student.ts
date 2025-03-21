import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Course } from "./course";


@Entity("Studenttbl110")
export class Student {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255 })
    email!: string;

    @ManyToMany(()=>Course,(course)=>course.id)
    @JoinTable()
    courses!:Course[];
}