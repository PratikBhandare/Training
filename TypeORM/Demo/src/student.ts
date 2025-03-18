import "reflect-metadata"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student_table_2001')
export class Student{
    @PrimaryGeneratedColumn()
    id!:Number;

    @Column()
    name!:String;

    @Column()
    email!:String;
}