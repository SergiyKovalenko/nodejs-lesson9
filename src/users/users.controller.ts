import { Controller , Get , Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './create-users.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
    async findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

  @Post('/api/users')
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<UserEntity> {
      return await this.userService.createUser(CreateUserDto);
  }
}
