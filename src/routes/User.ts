import { Router } from "express";
import { UsuarioController } from "../controller/UserController";
import { UserPet } from "../entity/UserPet";

export const routerUser = Router();
const userCtrl = new UsuarioController();

routerUser.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    const userPet = new UserPet( name, email, password);
    const savedUser = await userCtrl.postUser(userPet);
    if(!name && !email){
        res.json("nome e email não localizado")
    }else{
        res.json(savedUser);
    }
    
});

routerUser.get("/", async (req, res) => {
    const usersPet = await userCtrl.getusers();
    res.json(usersPet); 
})
