import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1706223714/nw88gqbsdcrh7grfvne2.jpg',

        ],
        slug: 'luna_shelby',
        title: 'Luna Shelby HomeStudio De Belleza',
        description:`✨ Transforma tu belleza con el toque experto de Luna Shelby  tu estilista profesional de confianza. Especializada en la magia de la coloración capilar, manicuras que deslumbran, y maquillaje para eventos inolvidables. En Luna Shelby HomeEstudio, cada detalle cuenta, y cada cliente brilla con su propio resplandor. ¡Reserva tu cita ahora y descubre la diferencia que un toque de profesionalismo puede hacer en tu estilo! 💇‍♀️💅💄 #BellezaConEstilo #ColoraciónProfesional #ManicuraPerfecta #MaquillajeDeEnsueño   ` ,
        instagram: 'instagram.com/lunahair_colorshelby',
        whatsapp: 'wa.me/56951179416',
        comments: [],
        tags: ['unas'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}