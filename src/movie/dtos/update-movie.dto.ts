import {
    IsString,
    IsInt,
    IsNumber,
} from 'class-validator';
  
export class UpdateMovieDto {
    @IsString()
    title: string;
  
    @IsString()
    synopsis: string;
  
    @IsString()
    cover: string;
  
    @IsInt()
    duration: number;
  
    @IsNumber()
    rating: number;
}
  