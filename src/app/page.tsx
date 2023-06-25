'use client'

import { FilterMovies } from '@/features/filter-movies'
import { MovieList, useGetMoviesQuery } from '@/entities/movie'

import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
    const { data, isLoading, error } = useGetMoviesQuery()
    const [filter, setFilter] = useState<string>('')
    if (isLoading) return <div>loading</div>
    if (!data || error) return <div>error</div>

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <FilterMovies
                    className={styles.filter}
                    onChange={e => {
                        setFilter(e.toLowerCase())
                    }}
                />
            </div>
            <MovieList movies={data.filter(movie => movie.title.toLowerCase().includes(filter))} />
        </div>
    )
}
