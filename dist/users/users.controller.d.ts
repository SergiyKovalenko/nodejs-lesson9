import { UserService } from './users.service';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './create-users.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserEntity[]>;
    createUser(CreateUserDto: CreateUserDto): Promise<UserEntity>;
}
