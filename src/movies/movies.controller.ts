import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// @Controller('movies')의 괄호 안에 있는 문자열은 url의 엔트리포인트를 의미한다.
// -> /movies
@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovie(): string {
    return 'This will return all movies';
  }

  // 쿼리 파라미터 사용
  // 예) /movies/search?year=2025
  @Get('search')
  searchMovie(@Query('year') searchingYear: string): string {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':movieId')
  getOneMovie(@Param('movieId') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  createMovie(@Body() movieData: any): any {
    return movieData;
  }

  @Delete('/:movieId')
  deleteMovie(@Param('movieId') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:movieId')
  patchMovie(@Param('movieId') movieId: string, @Body() updateData: any): any {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
