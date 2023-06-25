'use client'

import React from 'react'
import { TickerCounter } from '@/entities/basket'
import { Movie, useGetMoviesQuery } from '@/entities/movie'
import { MoviePreview } from '@/entities/movie/ui/movie-preview'
import styles from './styles.module.scss'

interface MovieListProps {
    movies: Movie[]
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className={styles.list}>
            {movies.map(movie => (
                <MoviePreview
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    posterUrl={movie.posterUrl}
                    genre={movie.genre}
                    after={<TickerCounter movieId={movie.id} />}
                />
            ))}
        </div>
    )
}
