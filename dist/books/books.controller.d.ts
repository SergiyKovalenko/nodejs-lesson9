import { CreateBookDto } from './create-books.dto';
import { BookService } from './books.service';
import { BookEntity } from './books.entity';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(): Promise<BookEntity[]>;
    createBook(CreateBookDto: CreateBookDto): Promise<BookEntity>;
}
