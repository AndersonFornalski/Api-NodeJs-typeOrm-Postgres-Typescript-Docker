import { getManager } from "typeorm";
import { resolve } from "url";
import { Pet } from "../entity/Pet";

export class PetController{
  
    async postPet(pet: Pet){
        const savePet = await getManager().save(pet);
        return savePet;
    }

    async getAllPets(){
        const getPets = await getManager().find(Pet);
        return getPets;
    }
    
}