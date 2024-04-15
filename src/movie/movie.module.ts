import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    CacheModule.register()],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
