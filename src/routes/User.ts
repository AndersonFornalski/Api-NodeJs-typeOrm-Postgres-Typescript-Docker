import { Router } from "express";
import { UsuarioController } from "../controller/UserController";
import { UserPet } from "../entity/UserPet";

export const routerUser = Router();
const userCtrl = new UsuarioController();

routerUser.get("/", async (req, res) => {
    const usersPet = await userCtrl.getusers();
    res.json(usersPet); 
})

routerUser.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = await userCtrl.getUserId(id);
    if(!usuarios){
        res.status(404).json("usuario não localizado ou removido")
    }else{
        res.status(200).json(usuarios);
    }
})

routerUser.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    const userPet = new UserPet( name, email, password);
    const savedUser = await userCtrl.postUser(userPet);
    if(!name || !email){
        res.status(404).json("nome e email não localizado")
    }else{
        res.status(200).json(savedUser);
    }
});

routerUser.get("/release/:idUsuario", async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const releases = await userCtrl.getReleaseToUserId(idUsuario);
    if(!releases){
      res.status(404).json("sem lançamentos para usuario");  
    }
    res.status(200).json(releases);
});

routerUser.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await userCtrl.deleteUserId(id);
    if(!id){
        res.status(404).json({ message:"usuario já foi removido" });
    }else{
        res.status(200).json("usuario removido");
    }
})



