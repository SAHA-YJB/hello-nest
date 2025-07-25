import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// @Controller('movies')의 괄호 안에 있는 문자열은 url의 엔트리포인트를 의미한다.
// -> /movies
@Controller('movies')
export class MoviesController {
  // 서비스의 함수를 사용하기 위해 주입
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovie(): Movie[] {
    return this.moviesService.getAllMovie();
  }

  // 쿼리 파라미터 사용
  // 예) /movies/search?year=2025
  @Get('search')
  searchMovie(@Query('year') searchingYear: string): Movie[] {
    return this.moviesService.searchMovie(searchingYear);
  }

  @Get(':movieId')
  getOneMovie(@Param('movieId') movieId: string): Movie {
    return this.moviesService.getOneMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData: Movie): boolean {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':movieId')
  deleteMovie(@Param('movieId') movieId: string): Movie[] {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch('/:movieId')
  patchMovie(@Param('movieId') movieId: string, @Body() updateData: Movie): Movie {
    return this.moviesService.patchMovie(movieId, updateData);
  }
}
