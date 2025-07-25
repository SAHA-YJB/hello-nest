import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// @Controller('movies')의 괄호 안에 있는 문자열은 url의 엔트리포인트를 의미한다.
// -> /movies
@Controller('movies')
export class MoviesController {
  // 서비스의 함수를 사용하기 위해 주입
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovie() {
    return this.moviesService.getAllMovie();
  }

  // 쿼리 파라미터 사용
  // 예) /movies/search?year=2025
  @Get('search')
  searchMovie(@Query('year') searchingYear: string): Movie[] {
    return this.moviesService.searchMovie(searchingYear);
  }

  @Get(':movieId')
  getOneMovie(@Param('movieId') movieId: number): Movie {
    return this.moviesService.getOneMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':movieId')
  deleteMovie(@Param('movieId') movieId: number): Movie[] {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch(':movieId')
  patchMovie(@Param('movieId', ParseIntPipe) movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.patchMovie(movieId, updateData);
  }
}
