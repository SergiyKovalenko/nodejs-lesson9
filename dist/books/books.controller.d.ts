import { BookService } from './books.service';
import { Book } from './books.entity';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(): Promise<Book[]>;
    createBook(book: Partial<Book>): Promise<Book>;
}
