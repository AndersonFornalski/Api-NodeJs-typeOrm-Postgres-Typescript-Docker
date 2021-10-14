import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Release } from "./Release";

@Entity()
export class UserPet {

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Release, r => r.usuario )
    release: Release[];
}
