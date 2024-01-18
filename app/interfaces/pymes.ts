import { IComment } from ".";

export interface IPyme {
    images: string[];
    slug: string;
    title: string;
    description: string;
    instagram: string;
    whatsapp: string;
    comments: IComment[]
    tags: string[];
    rating: Irating[];
}

export interface Irating {
    user: string;
    rate: number;
}