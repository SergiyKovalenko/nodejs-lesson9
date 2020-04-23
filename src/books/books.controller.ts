import { Controller , Get , Post, Body } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './books.entity';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/books')
  async findAll(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Post('/api/books')
  async createBook(@Body() book: Partial<Book>): Promise<Book> {
    return await this.bookService.createBook(book);
  }  
}
