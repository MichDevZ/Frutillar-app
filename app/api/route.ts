import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1706374073/vr4rqoj10sxinbl3wvi1.jpg',
        ],
        slug: 'estampados_anttera',
        title: 'Estampados Anttera',
        description:`Estampados en textil, tazon, mouse pad, botellas y más!` ,
        instagram: 'instagram.com/estampados_anttera',
        whatsapp: 'wa.me/56951171423',
        comments: [],
        tags: ['costura'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}