import { ObjectID } from 'typeorm';
export declare class Book {
    id: ObjectID;
    blogpost: string;
    title: string;
    author: string;
    published: Array<{
        publisher: string;
        year: number;
    }>;
    constructor(book?: Partial<Book>);
}
