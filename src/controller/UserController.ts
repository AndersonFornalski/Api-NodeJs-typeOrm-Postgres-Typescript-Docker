import { getManager } from "typeorm";
import { UserPet } from "../entity/UserPet";

export class UsuarioController{
    
    async getusers(){
        const getAllUsers = await getManager().find(UserPet);
        return getAllUsers; 
    }
  
    async postUser(usuario: UserPet){
        const saveUser = await getManager().save(usuario);
        return saveUser;
    }
 
    async getUserId(id: number){
        const userId = await getManager().findOne(UserPet, id);
        return userId;
    }
    
    async getReleaseToUserId(id: number){
        const usuario = await getManager().findOne(UserPet, id, {
            relations: [ 'release']
        });
        return usuario.release;
    }

    async deleteUserId(id: number){
        const userId = await getManager().delete(UserPet, id );
        return userId;
    }

    
}