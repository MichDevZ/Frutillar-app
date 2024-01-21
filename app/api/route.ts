import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705800617/t0d5emiwmvcsitr4o4xc.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705800617/sp8tq83kc7btlyrtm4m4.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705800630/jmkdwhjq0akasfpgvpxr.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705800630/achbp0qvmzfxhrogcyen.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705800629/gvl9zfskv5xatry8pk5i.jpg'
    
        ],
        slug: 'maron_studio',
        title: 'Maron Studio',
        description:
         'Homestudio enfocado en dar servicios de belleza tales como lifting de pestañas, extensión de pestañas, manicure dama y varón, esmaltado permanente, extensión de uñas (acrílicas, polygel, softgel) visagismo y perfilado de cejas',
        instagram: 'instagram.com/_maronstudio_',
        whatsapp: 'wa.me/56986083820',
        comments: [],
        tags: ['unas', 'pestañas'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}