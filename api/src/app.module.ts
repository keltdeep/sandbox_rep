import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './services/users/user.entity';
import {Ducks} from './services/ducks/ducks.entity';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { DucksModule } from './services/ducks/ducks.module';
import {JwtModule} from "@nestjs/jwt";
import { getConnectionOptions } from 'typeorm';
import { RedisController } from './controllers/redis/redis.controller';
import { RedisService } from './services/redis/redis.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
      CacheModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          isGlobal: true,
          useFactory: async (configService: ConfigService) => ({
              port: configService.get<string>('REDIS_PORT'),
              store: redisStore,
              host: configService.get<string>('REDIS_HOST'),
              password: configService.get<string>('REDIS_PASS')
          }),
      }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        Object.assign(await getConnectionOptions(), {
          host: configService.get<string>('POSTGRES_HOST'),
          port: configService.get<string>('POSTGRES_PORT'),
          username: configService.get<string>('POSTGRES_USER'),
          password: configService.get<string>('POSTGRES_PASSWORD'),
          database: configService.get<string>('POSTGRES_DATABASE'),
          entities: [User, Ducks],
      }),
      inject: [ConfigService],
    }),
      ConfigModule.forRoot({
        isGlobal: true
      }),
    ConfigModule,
    AuthModule,
    UsersModule,
    DucksModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('API_SECRET_KEY'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [RedisController],
  providers: [RedisService]
})
export class AppModule {}
