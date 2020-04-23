import { Controller , Get , Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('/api/users')
  async createUser(@Body() user: Partial<User>): Promise<User> {
    return await this.userService.createUser(user);
  }  
}
