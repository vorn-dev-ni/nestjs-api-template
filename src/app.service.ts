import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const port = this.configService.getOrThrow('port');
    return 'Server is running on port' + port;
  }
}
