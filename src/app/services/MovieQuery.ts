import { gql } from '@apollo/client';
import { apolloClient } from '@/lib/apolloClient';

const GET_MOVIES_BY_ID = gql`
    query MovieById($id: String!){
        movie (id: $id) {
            id
            title
            description
            yearLaunched
            link
            genres
            thumbFileURL
            bannerFileURL
            videoFileURL
            rating
        }
    }
`;

const GET_MOVIE_FEATURED = gql`
    query FeaturedMovie($id: String!){
        featuredMovie (id: $id) {
            id
            title
            description
            bannerFileURL
            videoFileURL
        }
    }
`;

const GET_MOVIES_BY_GENRE = gql`
    query MoviesByGenre($genre: String!, $limit: Int!){
        moviesByGenre (genre: $genre, limit: $limit) {
            id
            title
            description
            yearLaunched
            link
            genres
            thumbFileURL
            bannerFileURL
            videoFileURL
        }
    }
`;

const GET_MOVIES_SEARCH = gql`
    query MoviesSearch{
        moviesSearch {
            id
            title
            description
            yearLaunched
            link
            genres
            thumbFileURL
            bannerFileURL
            videoFileURL
            rating
        }
    }
`;

export const getMovieById = async (id: string) => {
    const { data } = await apolloClient.query({
        query: GET_MOVIES_BY_ID,
        variables: { id },
    });
    return data.movie;
};

export const getFeaturedMovie = async (id: string) => {
    console.log('GraphQL: getFeaturedMovie', id);
    const { data } = await apolloClient.query({
        query: GET_MOVIE_FEATURED,
        variables: { id },
    });
    return data.featuredMovie;
};

export const getMoviesByGenre = async (
  genre: string,
  options: { _limit?: number } = {},
) => {
    console.log('GraphQL: getMoviesByGenre', genre, options);
    const limit = options._limit ? options._limit : 10;
    const { data } = await apolloClient.query({
        query: GET_MOVIES_BY_GENRE,
        variables: { genre, limit: limit },
    });
    return data.moviesByGenre;
};

export const getMoviesSearch = async (
  title: string,
  genre: string,
  options: { _limit?: number } = {},
) => {
    console.log('GraphQL: getMoviesSearch', genre, options);
    const limit = options._limit ? options._limit : 10;
    const { data } = await apolloClient.query({
        query: GET_MOVIES_BY_GENRE,
        variables: { title, genre, limit },
    });
    return data.moviesByGenre;
};


