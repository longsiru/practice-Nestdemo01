import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {
  //路由的模糊匹配
  @Get('a*a')
  indexA() {
    return '模糊匹配';
  }
  //注意code的顺序。
  //http://localhost:3000/news/add?id=2&name=saayoo
  @Get('add')
  addData(@Query('id') id) {
    //query.id
    console.log(id); //2
    return 'add news';
  }
  //通过@Param()获取动态路由。 http://localhost:3000/news/123  123就是动态路由
  @Get(':id')
  index(@Param() id) {
    console.log(id);
    return 'this is a news page';
  }
}
