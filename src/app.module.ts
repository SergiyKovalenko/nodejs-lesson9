import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://nodejs:123456787654321@nodejs-jegdb.mongodb.net/test?retryWrites=true&w=majority',
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }), 
    BooksModule, 
    UsersModule
  ],
})
export class AppModule {}
