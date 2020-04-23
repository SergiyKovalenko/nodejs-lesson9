import { ObjectID } from 'typeorm';
export declare class User {
    id: ObjectID;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    isAdmin: boolean;
    verified: boolean;
    constructor(user?: Partial<User>);
}
