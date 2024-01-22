import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951824/lok7uwdzkoh48dy4l75a.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951825/vzweg8dfozrojdx5y5hj.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951825/udqtl2eudrfg9nqqqhvo.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951825/amzysuqw4j87ybew2veb.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951825/m703sdxhywtulbddshxd.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705951825/cl1d9zyzyhi2zp78obat.jpg'

        ],
        slug: 'transporte_turismo_frutillar',
        title: 'Transporte Turismo Frutillar',
        description:`La belleza de nuestra zona y sus hermosas ciudades que la rodean como la ciudad de Puerto varas también conocida como la ciudad de las Rosas,
        cercana Puerto Montt conocido por su mercado tipico de angelmo y artesanías.
        Frutillar es una hermosa ciudad de pioneros Alemanes que trajeron sus costumbres y culturas,
        También es llamada la cuidad de la música interpretada por nuestro hermoso teatro del lago.
        
        Transporte Turismo Frutillar
        Es una empresa de frutillar dedicada al transporte de pasajeros y turismo
        Para nuestros amigos de frutillar y todos nuestros queridos visitantes cada día llegan a  nuestra zona
        
        Agradecemos a todos nuestros clientes que cada día se suman a este Equipo de trabajo dedicados a uds para que puedan tener un viaje tranquilo y placentero.` ,
        instagram: 'instagram.com/manueltransportesfrutillar',
        whatsapp: 'wa.me/56973190096',
        comments: [],
        tags: ['turismo'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}