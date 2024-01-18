import { db } from "@/app/database";
import getUsersModel from "@/app/models/users";
import type { NextRequest } from "next/server";

export async function POST (req: NextRequest) { 

    const formData = await req.formData();
    const user = formData.get('user')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password != confirmPassword) {
        await db.disconnect();
        return Response.json('Contraseña no coincide')
    }

    const Users = getUsersModel();

    await db.connect();

    const userIsAlreadyTaken = await Users.findOne({user: user})

    if (userIsAlreadyTaken) {
        await db.disconnect();
        return Response.json('Nombre de usuario ya registrado')
    }

    const newUserToSave = new Users({user: user, password: password})
    await newUserToSave.save();

    await db.disconnect();

    return Response.json('Todo ok')


}