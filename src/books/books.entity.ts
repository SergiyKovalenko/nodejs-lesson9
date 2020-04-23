import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @ObjectIdColumn() id: ObjectID;
  @Column() blogpost: string;
  @Column() title: string;
  @Column() author: string;
  @Column() published: Array <{
    publisher: string;
    year: number;
  }>;

  constructor(book?: Partial<Book>) {
    Object.assign(this, book);
  }
}