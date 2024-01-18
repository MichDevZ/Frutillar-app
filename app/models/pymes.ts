import mongoose, { Model, Schema, model } from "mongoose";
import { IPyme} from "../interfaces";

const pymesScheme = new Schema ({
    images: [{type: String}],
    slug: {type: String},
    title: {type: String},
    description: {type: String},
    instagram: {type: String},
    whatsapp: {type: String},
    comments: [{
        user: {type: String},
        comment: {type: String},
        date: {type: String}
    }],
    tags: [{type: String }],
    rating: [{
        user: {type: String},
        rate: {type: Number},
    }]
    },
{
timestamps: true
});


pymesScheme.index({title: 'text' , tags: 'text'});

let Pymes: Model<IPyme>;

export default function getPymesModel(): Model<IPyme> {
    if (!Pymes) {
        Pymes = mongoose.models.Pymes || model('Pymes', pymesScheme);
    }
    return Pymes;
}