import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { DeleteResult } from 'typeorm';
import { ApiResponse } from '@nestjs/swagger';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService){}

    @Get()
    @ApiResponse({ status: 200, description: 'List of movies', type: [Movie] })
    async findAllMovies(): Promise<Movie[]> {
        return this.movieService.findAll();
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: 'Get one Movie by Id', type: [Movie] })
    async findOneMovie(@Param('id') id: string): Promise<Movie> {
        return this.movieService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create a Movie', type: [Movie] })
    async createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.movieService.create(createMovieDto);
    }

    @Put('/:id')
    @ApiResponse({ status: 200, description: 'Update a Movie', type: [Movie] })
    updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Promise<Movie> {
        return this.movieService.update(id, updateMovieDto);
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: 'Delete a Movie', type: [Movie] })
    deleteMovie(@Param('id') id: string): Promise<DeleteResult> {
        return this.movieService.remove(id);
    }
}
