import { Router } from "express";
import { ReleaseController } from "../controller/ReleaseController";
import { UsuarioController } from "../controller/UserController";
import { Release } from "../entity/Release";

export const routerRelease = Router();
const releaseCtrl = new ReleaseController();
const userCtrl = new UsuarioController();

routerRelease.post("/", async (req, res) => {
    const { idUsuario, value, description, date } = req.body;
    const usuario = await userCtrl.getUserId(idUsuario);
    if(usuario){
        const release = new Release( value, description, date, usuario)
        const saveRelease = await releaseCtrl.postRelease(release)
        res.json(saveRelease);
    } else {
        res.status(404).json("User of release not Found");
    }

});

routerRelease.get("/", async (req, res) => {
    const releases = await releaseCtrl.getReleases();
    if(!releases){
        res.status(404).json({ message:"você ainda não possui lançamentos" })
    }else{
        res.status(200).json(releases)
    }
})
