import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './create-users.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) 
    private userModel: MongoRepository<UserEntity>
) {}

async findAll(): Promise<UserEntity[]> {
    return this.userModel.find();
}

async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userModel.save(CreateUserDto);
}
}
