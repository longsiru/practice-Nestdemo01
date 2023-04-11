import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return 'custom center';
  }

  //通过@Query()装饰器来获取Get传值   http://localhost:3000/user/add?id=1&name=sayo
  @Get('add')
  addData(@Query() query) {
    console.log(query);
    return query;
  }

  //通过@Request() 装饰器来获取Get传值//http://localhost:3000/user/edit
  @Get('edit')
  editData(@Request() req) {
    console.log(req.query);
    return 'via Request get gets value';
  }

  //通过@Body()装饰器来获取post的传值。
  @Post('create')
  create(@Body() body) {
    console.log(body);
    console.log('pass');
    return 'this is a post mothod';
  }

  //获取动态路由。
}
