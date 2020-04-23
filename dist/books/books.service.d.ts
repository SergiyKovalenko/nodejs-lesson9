import { MongoRepository } from 'typeorm';
import { CreateBookDto } from './create-books.dto';
import { BookEntity } from './books.entity';
export declare class BookService {
    private bookModel;
    constructor(bookModel: MongoRepository<BookEntity>);
    findAll(): Promise<BookEntity[]>;
    createBook(CreateBookDto: CreateBookDto): Promise<BookEntity>;
}
