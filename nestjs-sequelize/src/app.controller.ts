import { Controller, Get, Post, Headers, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  alertEndpoint(@Body() body: Body, @Headers() headers): string {
    console.log(headers)
    console.log(JSON.stringify(body))
    return "{}"
  }
}
