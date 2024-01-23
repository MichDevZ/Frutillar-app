import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1706038322/osnhy9zazr1jtut8epxb.jpg',

        ],
        slug: 'meloso_sin_culpa',
        title: 'Meloso Sin Culpa',
        description:`Mi nombre es Consuelo Solís, Terapeuta Ocupacional de profesión, llevo 3 años dedicando parte de mi tiempo a la alimentación libre de azúcar, de a poco a tomado fuerza y cada día crece más con el cariño de los clientes, cuento con más de 100 productos Sin azúcar añadida, entre ellos Chocolatería, repostería y masas.` ,
        instagram: 'instagram.com/Meloso_sin_culpa',
        whatsapp: 'wa.me/56990031235',
        comments: [],
        tags: ['pasteleria'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}