import "reflect-metadata"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Movies110')
export class Movie{
    @PrimaryGeneratedColumn()
    id!:Number;

    @Column()
    title!:String;

    @Column()
    gnnre!:String;

    @Column()
    releaseYear!:Number;

    @Column()
    rating!:Number;
}