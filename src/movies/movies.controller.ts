import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

// @Controller('movies')의 괄호 안에 있는 문자열은 url의 엔트리포인트를 의미한다.
// -> /movies
@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovie(): string {
    return 'This will return all movies';
  }

  @Get('/:movieId')
  getOneMovie(@Param('movieId') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  createMovie(): string {
    return 'This will create a movie';
  }

  @Delete('/:movieId')
  deleteMovie(@Param('movieId') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:movieId')
  patchMovie(@Param('movieId') movieId: string): string {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
