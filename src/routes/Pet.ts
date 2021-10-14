import { Router } from "express";
import { PetController } from "../controller/PetController";
import { Pet } from "../entity/Pet";

export const routerPet = Router();
const petCtrl = new PetController();

routerPet.post("/", async (req, res) => {
    const { name, type, age } = req.body;
    const pets = new Pet( name, type, age);
    const savedPet = await petCtrl.postPet(pets);
    if(!req.body){
        res.status(400).json("nome, type e idade não existe");
    }else{
        res.status(200).json(savedPet);
    }    
});

routerPet.get("/", async (req, res) => {
    const pets = await petCtrl.getAllPets();
    res.json(pets); 
});
