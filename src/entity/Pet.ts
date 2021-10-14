import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Pet {
    
    constructor(name: string, type: string, age: number){
        this.name = name;
        this.type = type;
        this.age = age;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    age: number;

}
