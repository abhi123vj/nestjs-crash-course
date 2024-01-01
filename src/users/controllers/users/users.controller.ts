import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { userName: 'Abhiram', email: '4bh1ram@gmail.com' };
  }
  @Get(':id/isActive')
  getUserIsActive(@Query('active') active: string) {
    return { active, userName: 'Abhiram', email: '4bh1ram@gmail.com' };
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, userName: 'Abhiram', email: '4bh1ram@gmail.com' };
  }
  @Get('posts')
  getUsersPosts() {
    return [
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
    ];
  }
  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }
}
