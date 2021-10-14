import { getManager } from "typeorm";
import { Release } from "../entity/Release";

export class ReleaseController{
  
    async postRelease(release: Release){
        const saveRealease = await getManager().save(release);
        return saveRealease;
    }

    async getReleases(){
        const getAllReleases = await getManager().find(Release);
        return getAllReleases; 
    }

    async getReleaseId(id: number){
        const releaseId = await getManager().findOne(Release, id);
        return releaseId;
    }
    
}