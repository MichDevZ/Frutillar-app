import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705781656/bumm6fwhcalubhwyffub.jpg',
    
        ],
        slug: 'costuras_del_sur',
        title: 'Costuras y Bordados del Sur',
        description:
         'Somos una pyme familiar en la cual realizamos costuras, bordados, estampados y confecciones',
        instagram: 'instagram.com/costuras_y_bordados_del_sur',
        whatsapp: 'wa.me/56967971017',
        comments: [],
        tags: ['costura'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}