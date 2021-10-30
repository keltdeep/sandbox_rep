import {
  Controller,
  UseInterceptors,
  CacheInterceptor,
  Request,
  Body,
  Get,
  Post,
  UseGuards
} from '@nestjs/common';
import {JwtAuthGuard} from '../../services/auth/jwt-auth.guard';
import {DucksService} from '../../services/ducks/ducks.service';
import {DuckDTO} from './dto/duck.dto';

@Controller('ducks')
export class DucksController {
  constructor(private ducksService: DucksService) {}

  @UseInterceptors(CacheInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getDucks(@Request() req) {
    return this.ducksService.getDucks(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createDuck(@Body() duckDTO: DuckDTO) {
    return this.ducksService.createDuck(duckDTO);
  }
}
