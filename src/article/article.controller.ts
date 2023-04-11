import { Controller, Get } from '@nestjs/common';

@Controller('article') //http://localhost:3000/article
export class ArticleController {
  @Get()
  index() {
    return 'this is an article page';
  }

  @Get('add')
  indexAdd() {
    return 'add article';
  }
}
