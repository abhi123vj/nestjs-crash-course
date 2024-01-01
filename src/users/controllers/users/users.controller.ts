import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
  @Post('create')
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('created');
  }
}
