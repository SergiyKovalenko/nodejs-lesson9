import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './create-books.dto';
import { BookService } from './books.service';
import { BookEntity } from './books.entity';

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}
  
  @Get('/books')
    async findAll(): Promise<BookEntity[]> {
        return this.bookService.findAll();
    }
  
  @Post('/api/books')
  async createBook(@Body() CreateBookDto: CreateBookDto) {
      return this.bookService.createBook(CreateBookDto);
  }
}
