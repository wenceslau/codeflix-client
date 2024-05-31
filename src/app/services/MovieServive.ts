import { RequestOptions, apiRequest } from '@/app/services/ApiRequest';
import { assertQualifiedTypeIdentifier } from '@babel/types';
import { Movie, Movies } from '@/app/Types/movies';

export const getMovieById = async (id: string): Promise<Movie> => {
  console.log("getMovieById", id)
  return await apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  console.log("getFeaturedMovie", id)
  return await apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (genre: string, options?: RequestOptions): Promise<Movies> => {
  console.log("getMoviesByGenre", genre, options)
  return await apiRequest(
    `movies`,
    { genres_like: encodeURIComponent(genre) }, options,
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 100
  },
): Promise<Movies> => {
  console.log("searchMovies", title, genre, options)
  return await apiRequest(
    `movies`,
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options,
  )
}