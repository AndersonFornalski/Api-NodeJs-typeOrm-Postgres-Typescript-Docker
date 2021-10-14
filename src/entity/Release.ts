import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserPet } from "./UserPet";

@Entity()
export class Release{

    constructor(value: number, description: string, date: Date, usuario: UserPet){
        this.value = value;
        this.description = description;
        this.date = date;
        this.usuario = usuario;
    }

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "float" })
    value: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(() => UserPet)
    usuario: UserPet;

}