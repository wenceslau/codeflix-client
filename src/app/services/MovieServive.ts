import { RequestOptions, apiRequest } from '@/app/services/ApiRequest';
import { assertQualifiedTypeIdentifier } from '@babel/types';
import { Movie, Movies } from '@/app/Types/movies';

export const getMovieById = async (id: string): Promise<Movie> => {
  return await apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return await apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMovieByGenre = async (genre: string, options?: RequestOptions): Promise<Movies> => {
  return await apiRequest(
    `movies`,
    { genres_like: encodeURIComponent(genre) }, options,
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {},
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