import { ObjectID } from 'typeorm';
export declare class UserEntity {
    id: ObjectID;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    isAdmin: boolean;
    verified: boolean;
}
