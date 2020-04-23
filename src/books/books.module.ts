import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookService]
})
export class BooksModule {}
