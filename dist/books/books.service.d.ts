import { Book } from './books.entity';
import { MongoRepository } from 'typeorm';
export declare class BookService {
    private readonly booksRepository;
    constructor(booksRepository: MongoRepository<Book>);
    findAll(): Promise<Book[]>;
    createBook(book: any): Promise<Book>;
}
