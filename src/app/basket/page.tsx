'use client'

import Link from 'next/link'
import { MovieList } from '@/widgets/movie-list'
import { useGetMoviesQuery } from '@/entities/movie'
import { useBasket } from '@/entities/basket'
import { Card } from '@/shared/ui/card'
import styles from './styles.module.scss'

const BasketPage = () => {
    const { tickets } = useBasket()
    const moviesIds = Object.keys(tickets)
    const { data, isLoading, error } = useGetMoviesQuery()
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    if (!data || moviesIds.length === 0) {
        return (
            <Card>
                <div>сейчас тут пусто, сходите выберите фильм по душе, и возвращайтесь чтобы оформить заказ</div>
                <Link href="/" className={styles.link}>тык - за билетами</Link>
            </Card>
        )
    }

    return (
        <MovieList
            movies={data.filter(movie => {
                return moviesIds.includes(movie.id) && tickets[movie.id] > 0
            })}
        />
    )
}

export default BasketPage
