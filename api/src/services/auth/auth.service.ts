import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  validateUser = async(email: string, password: string): Promise<any> => {
    const user = await this.usersService.findOneUser(email, password);

    if (user) {
      return user;
    }

    return null;
  };

  login = (user: any) => {
    const payload = {email: user.email, sub: user.id};

    return {
      accessToken: this.jwtService.sign(payload),
      userId: payload.sub
    };
  }

  register = ({email, password}) => this.usersService.register(email, password);
}
