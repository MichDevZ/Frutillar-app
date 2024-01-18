import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513443/jsnyh0eqaigf2vt2iwoz.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513444/ofosum7akmyatue03llj.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513444/fkg9s3q7ki8kqjkghugq.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513444/iiqgwzcoqsfdln92zq87.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513445/riq3b4bnva3zrxupqw02.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513444/ykmfifjfmamfbab16szy.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705513444/cvfygb41wv4xganquubu.jpg'
    
        ],
        slug: 'casa_de_mia',
        title: 'Casa de Mia',
        description:
         'Somos un emprendimiento de comida a domicilio ubicado en la comuna de Frutillar con concepto dark kitchen, enfocado en ofrecer variedad de papas fritas naturales acompañada de ingredientes de la mejor calidad💯 papas naturales, salchichas sureñas, longaniza artesanal de primera, pulpa de la mejor calidad... Si tenias un concepto de papas fritas, casademia llegó para mejorarlo por completo ofreciendo la mejor relación cantidad-calidad-precio. ¿Te las vas a perder? Pide las tuyas ahora y enamórate de nuestras papas💛🍟💛',
        instagram: 'instagram.com/casademia_frutillar',
        whatsapp: 'wa.me/56961441192',
        comments: [],
        tags: ['papas', 'hamburguesas'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}