import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705784195/pqkgwqwqhnm1ktsgndwg.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705784195/wume86ywzne0shjgvsme.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705784195/vixodacsuqoykbv2ktiu.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705784195/rtwz1hu4zvxd75e6kbev.jpg'
    
        ],
        slug: 'girly_luxe',
        title: 'Girly Luxe',
        description:
         'Tienda de productos de cuidado femenino. Encontrarás exfoliantes naturales, maquillaje y productos de cuidado capilar. Todos nuestros productos son Cruelty Free!',
        instagram: 'instagram.com/girlyluxe.cl',
        whatsapp: 'wa.me/56936397884',
        comments: [],
        tags: ['tiendas'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}