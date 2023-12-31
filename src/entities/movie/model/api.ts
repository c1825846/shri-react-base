'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Movie } from './types'

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: builder => ({
        getMovies: builder.query<Movie[], void>({
            query: () => 'movies',
        }),
        getMovie: builder.query<Movie, string>({
            query: (movieId) => `movie/?movieId=${movieId}`
        })
    }),
})

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi