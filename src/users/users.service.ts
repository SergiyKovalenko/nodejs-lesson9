import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: MongoRepository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({});
  }

  async createUser(user): Promise<User> {
    return await this.usersRepository.save(new User(user));
  }
}
