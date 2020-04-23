import { ObjectID } from 'typeorm';
import { CreateBookPublishedDto } from './create-books.dto';
export declare class BookEntity {
    id: ObjectID;
    blogpost: string;
    title: string;
    author: string;
    published: CreateBookPublishedDto;
}
