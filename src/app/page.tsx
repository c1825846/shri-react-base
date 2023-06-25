'use client'

import { FilterMovies } from '@/features/filter-movies'
import { MovieList, useGetMoviesQuery } from '@/entities/movie'

import styles from './page.module.css'

export default function Home() {
    const { data, isLoading, error } = useGetMoviesQuery()
    if (isLoading) return <div>loading</div>
    if (!data || error) return <div>error</div>

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <FilterMovies className={styles.filter} />
            </div>
            <MovieList movies={data} />
        </div>
    )
}
