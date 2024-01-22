import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705948324/enmgru6zekvkhbixgldd.png',
        ],
        slug: 'alto_cafe',
        title: 'Alto Café Frutillar',
        description:
         `¡Bienvenidos a Alto Café! Sumérgete en la calidez de nuestro ambiente hogareño y familiar, donde cada rincón está impregnado de un encanto único. Nuestro espacio está cuidadosamente decorado con elementos rústicos y confeccionado con productos reciclados, creando así un ambiente acogedor que te invita a relajarte y disfrutar.
         En Alto Café, la experiencia culinaria es exquisita. Nuestra cocina está impregnada de sabores auténticos y preparada con ingredientes frescos y de la más alta calidad.
         Tenemos horarios continuados de lunes a lunes de 12am a 12pm, no olvides seguirnos en Instagram alto.cafe.frutillar para no perderte nuestras novedades
         ` 
            
         ,
        instagram: 'instagram.com/alto.cafe.frutillar',
        whatsapp: '',
        comments: [],
        tags: ['tablas'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}