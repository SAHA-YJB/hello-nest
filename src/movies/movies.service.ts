import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovie(): Movie[] {
    return this.movies;
  }

  searchMovie(searchingYear: string): Movie[] {
    return this.movies.filter((movie) => movie.year >= +searchingYear);
  }

  getOneMovie(movieId: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +movieId);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId} not found.`);
    }
    return movie;
  }

  createMovie(movieData: Movie): boolean {
    this.movies.push({
      ...movieData,
      id: this.movies.length + 1,
    });
    return true;
  }

  patchMovie(movieId: string, updateData: Movie): Movie {
    this.getOneMovie(movieId);
    const updatedMovie = this.movies.map((movie) => (movie.id === +movieId ? { ...movie, ...updateData } : movie));
    this.movies = updatedMovie;
    return updatedMovie.find((movie) => movie.id === +movieId) as Movie;
  }

  deleteMovie(movieId: string): Movie[] {
    this.getOneMovie(movieId);
    const deletedMovie = this.movies.filter((movie) => movie.id !== +movieId);
    this.movies = deletedMovie;
    return deletedMovie;
  }
}
