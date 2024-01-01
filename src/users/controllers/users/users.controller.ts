import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { userName: 'Abhiram', email: '4bh1ram@gmail.com' };
  }
  @Get('posts')
  getUsersPosts() {
    return [
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
      { userName: 'Abhiram', post: '4bh1ram@gmail.com' },
    ];
  }
}