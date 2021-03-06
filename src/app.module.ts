import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://nodejs:123456787654321@nodejs-jegdb.mongodb.net/test?retryWrites=true&w=majority',
        entities: ["dist/**/*.entity{.ts,.js}"],
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }), 
    BooksModule, 
    UsersModule
  ],
  providers: [
    {
        provide: APP_PIPE,
        useClass: ValidationPipe,
    },
],
})
export class AppModule {}
