import {Body, Get, Controller, Query, Post, Request} from '@nestjs/common';
import {RedisService} from '../../services/redis/redis.service';
import {VerifyCodeDto} from './dto/verifyCode.dto';

@Controller('redis')
export class RedisController {
  constructor(private redisService: RedisService) {}

  @Post('set')
  setItem(@Body() verifyCodeDto: VerifyCodeDto) {
    return this.redisService.setItem(verifyCodeDto);
  }

  @Get('get')
  getItem(@Query() query) {
    return this.redisService.getItem(query?.key);
  }
}
