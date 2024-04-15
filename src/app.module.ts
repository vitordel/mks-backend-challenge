import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CacheModule } from '@nestjs/cache-manager';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
  }),
  CacheModule.register(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    migrations: [`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
  }),
  ClientsModule.register([
    {
      name: 'MOVIE_SERVICE',
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      }
    },
  ]),
  MovieModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
