import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class MovieService {
  
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(): Promise<Movie[]> {
    const cacheKey = "all_movies";
    const cacheData = await this.cacheManager.get<Movie[]>(cacheKey);

    if(cacheData) return cacheData;

    const movies = await this.movieRepository.find();

    await this.cacheManager.set(cacheKey, movies);

    return movies;
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOneBy({id});
  }

  async create(createMovie: CreateMovieDto): Promise<Movie> {
    return this.movieRepository.save({...createMovie});
  }

  async update(id: string, updateMovie: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id)
    return this.movieRepository.save({...movie, ...updateMovie});
  }
  
  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id)
    return this.movieRepository.delete({id})
  }
}
