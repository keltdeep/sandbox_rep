import {Injectable, CACHE_MANAGER, Inject, Logger} from '@nestjs/common';
import {Ducks} from './ducks.entity';
import {Connection} from 'typeorm';
import {Cache} from 'cache-manager';

@Injectable()
export class DucksService {
  private readonly logger = new Logger('DucksService');

  constructor(
    private connection: Connection,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  get ducksRepository() {
    return this.connection.getRepository(Ducks);
  }

  getDucks = async(user) => {
    let userDucks = null;

    try {
      userDucks = await this.ducksRepository.find({
        where: {user: user.id},
        relations: ['user']
      });
    } catch(err) {
      this.logger.error(err);
    }

    return userDucks;
  };

  createDuck = (duck) => {
    try {
      return this.ducksRepository.save(duck);
    } catch(err) {
      this.logger.error(err);
    }
  };
}
