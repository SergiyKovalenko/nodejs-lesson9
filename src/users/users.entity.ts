import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() phone: number;
  @Column() isAdmin: boolean;
  @Column() verified: boolean;


  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}