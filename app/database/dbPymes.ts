import { redirect } from "next/navigation";
import { db } from ".";
import getPymesModel from "../models/pymes";


export async function getAllPymes () {
    
    const Pymes = getPymesModel();

    await db.connect();

    const pymes = await Pymes.find();

    await db.disconnect();

    return pymes;
}



export async function getPymeBySlug (slug: string | null) {

    const Pymes = getPymesModel();

    await db.connect();
    const pyme = await Pymes.find({slug: slug})

    if (!pyme) {
        redirect('../')
    }

    await db.disconnect();
    return pyme
    
}


export async function getPymeByTags (tag: string | null) {

    const Pymes = getPymesModel();

    if (tag === 'todas') {

        await db.connect();
        const pyme = await Pymes.find()
        await db.disconnect();
        return pyme; 
    }
    
    await db.connect();
    const pyme = await Pymes.find({tags: {$in: [tag]}})
    await db.disconnect();
    

    return pyme
    
}


