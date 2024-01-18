import mongoose, { Model, Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const usersScheme = new Schema ({
    user: {type: String},
    password: {type: String}
    },
{
timestamps: true
});


usersScheme.index({title: 'text' , tags: 'text'});

let Users: Model<IUser>;

export default function getUsersModel(): Model<IUser> {
    if (!Users) {
        Users = mongoose.models.Users || model('Users', usersScheme);
    }
    return Users;
}
