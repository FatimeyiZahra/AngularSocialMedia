import {image} from './image';

export interface User {
    id: number;
    userName: string;
    name: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    introduction: string;
    profileImageUrl:string;
    imageProf:string;
    images: image[];
}
