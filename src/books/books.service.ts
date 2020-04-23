import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: MongoRepository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.find({});
  }

  async createBook(book): Promise<Book> {
    return await this.booksRepository.save(new Book(book));
  }
}
