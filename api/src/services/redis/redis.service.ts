import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import {Cache} from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getItem = async(key) => {
    let res = null;

    if (key) {
      res = await this.cacheManager.get(key);
    }

    return res;
  };

  setItem = ({key, value}) => this.cacheManager.set(key, value, {ttl: 60});
}
