import {
    IsString,
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsBoolean,
    IsNumber,
} from 'class-validator';
  
export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    synopsis: string;
  
    @IsString()
    @IsNotEmpty()
    cover: string;
  
    @IsInt()
    @IsNotEmpty()
    duration: number;
  
    @IsNumber()
    @IsNotEmpty()
    rating: number;
}
  