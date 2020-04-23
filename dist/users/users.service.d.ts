import { UserEntity } from './users.entity';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './create-users.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: MongoRepository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    createUser(CreateUserDto: CreateUserDto): Promise<UserEntity>;
}
