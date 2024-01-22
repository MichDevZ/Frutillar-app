import { NextRequest } from "next/server";
import getPymesModel from "../models/pymes";
import { db } from "../database";

export async function GET (req: NextRequest) {
    const pymes = getPymesModel();

    await db.connect();

    await pymes.insertMany({
        images: [
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705947173/liv1appnpsrj9lyufwe1.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705947173/ouhjcjj0jfj0yludx3qe.jpg',
            'https://res.cloudinary.com/dz3doiblo/image/upload/v1705947173/lownpimozrkjbtbrajib.jpg'
        ],
        slug: 'go_safe',
        title: 'Go Safe',
        description:
         `GO SAFE ( o " Ir Seguro" traducido del Ingles) es una empresa Creada con la Finalidad de entregar servicios de Transporte de personas, Delivery's y/o Encargos por Compras o retiros se Encomiendas de la forma mas Responsable,  Confiable y Con Tiempos reales.
         Lo que Comenzo como un Plan B Familiar, hoy lleva mas de 3 años Funcionando.`,
        instagram: '',
        whatsapp: 'wa.me/56997770180',
        comments: [],
        tags: ['uber'],
        rating: []
    })


    await db.disconnect();
    return Response.json({ message: 'Proceso realizado correctamente' });

}