import { User } from './users.entity';
import { MongoRepository } from 'typeorm';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: MongoRepository<User>);
    findAll(): Promise<User[]>;
    createUser(user: any): Promise<User>;
}
