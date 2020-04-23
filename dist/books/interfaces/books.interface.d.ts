import { Document } from 'mongoose';
export interface IBooks extends Document {
    readonly blogpost: string;
    readonly firstName: string;
    readonly lastName: number;
    readonly email: string;
    readonly phone: number;
    readonly isAdmin: boolean;
    readonly verified: boolean;
    readonly published: Array<{
        publisher: string;
        year: number;
    }>;
}
