import {Injectable} from '@nestjs/common';
import {Connection} from 'typeorm';
import {User} from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {}

  findOneUser = async(email, password) => {
    const repository = this.connection.getRepository(User);
    const user = await repository.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return user;
    }

    return null;
  };

  register = async(email, password) => {
    const repository = this.connection.getRepository(User);
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return repository.save({email, password: hash});
  };
}
