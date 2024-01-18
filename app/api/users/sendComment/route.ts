import { db } from "@/app/database";
import getPymesModel from "@/app/models/pymes";
import type { NextRequest } from "next/server";


export async function POST (req: NextRequest) { 

    const {commentToSend, user, pyme} = await req.json()

    const date = new Date().toLocaleDateString()
    
    if (commentToSend.length <= 0 ) {
        return Response.json('Al menos 6 carácteres')
    }



    const Pymes = getPymesModel();

    await db.connect();

    const pymes = await Pymes.findOne({slug: pyme});
        if (!pymes) {
            return Response.json('No hay ninguna pime con ese nombre');
        }
    
    pymes.comments.push({user, comment: commentToSend, date})
    

    await pymes.save();

    await db.disconnect()

    return Response.json('Todo ok')
    

}