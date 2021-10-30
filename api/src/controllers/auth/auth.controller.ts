import {Request, Controller, Body, Post, UseGuards} from '@nestjs/common';
import {AuthService} from '../../services/auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
import {AuthDTO} from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {
  }

    @Post('auth')
    @UseGuards(AuthGuard('local'))
    auth(@Request() req) {
    return this.authService.login(req.user);
  }

    @Post('register')
    register(@Body() authDTO: AuthDTO) {
      return this.authService.register(authDTO);
    }
}
