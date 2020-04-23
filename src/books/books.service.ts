import { MongoRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './create-books.dto';
import { BookEntity } from './books.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity) 
        private bookModel: MongoRepository<BookEntity>
    ) {}

    async findAll(): Promise<BookEntity[]> {
        return this.bookModel.find();
    }

    async createBook(CreateBookDto: CreateBookDto): Promise<BookEntity> {
        return this.bookModel.save(CreateBookDto);
    }
}
