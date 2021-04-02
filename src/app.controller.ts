import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//Decorators ou ES7 decorators

@Controller('/prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
}
