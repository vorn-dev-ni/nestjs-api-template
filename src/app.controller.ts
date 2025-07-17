import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/healths')
  checkHealth() {
    return {
      success: true,
      statusCode: HttpStatus.OK,
      message: 'Server is healthy',
    };
  }
}
