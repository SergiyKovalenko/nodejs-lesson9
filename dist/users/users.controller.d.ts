import { UserService } from './users.service';
import { User } from './users.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    createUser(user: Partial<User>): Promise<User>;
}
