import { db } from "@/app/database";
import getPymesModel from "@/app/models/pymes";
import type { NextRequest } from "next/server";


export async function POST (req: NextRequest) { 

    const {value, user, pyme} = await req.json()

    if(value <= 0) {
        return;
    }

    const Pymes = getPymesModel();

    await db.connect();

    const pymes = await Pymes.findOne({slug: pyme});
        if (!pymes) {
            await db.disconnect()
            return Response.json('No se encontró ninguna pyme por ese slug');

        }

    const isAlreadyRate = pymes.rating.some(rating => rating.user === user)
    
    if (isAlreadyRate) {
        await db.disconnect()
        return Response.json('Ya has votado')
    }

    pymes.rating.push({user: user, rate: value})
    await pymes.save();

    await db.disconnect()

    return Response.json('Todo ok')
    

}