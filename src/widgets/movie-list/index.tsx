'use client'

import React from 'react'
import { TickerCounter } from '@/entities/basket'
import { useGetMoviesQuery } from '@/entities/movie/model'
import { MoviePreview } from '@/entities/movie/ui/movie-preview'
import styles from './styles.module.scss'

export const MovieList: React.FC = () => {
    const { data, isLoading, error } = useGetMoviesQuery()
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    return (
        <div className={styles.list}>
            {data?.map(movie => (
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
