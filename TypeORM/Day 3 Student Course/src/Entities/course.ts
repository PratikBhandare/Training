import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { Student } from "./student";


@Entity("Coursetbl110")
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255 })
    duration!: string;

    @ManyToMany(()=>Student,(student)=>student.courses)
    student!:Student[];
}