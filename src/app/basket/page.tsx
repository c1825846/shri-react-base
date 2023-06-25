'use client'

import { MovieList } from '@/widgets/movie-list'
import { useGetMoviesQuery } from '@/entities/movie'
import { useBasket } from '@/entities/basket'

const BasketPage = () => {
    const { tickets } = useBasket()
    const moviesIds = Object.keys(tickets)
    const { data, isLoading, error } = useGetMoviesQuery()
    if (isLoading) return <div>loading</div>
    if (!data || error) return <div>error</div>

    return <MovieList movies={data.filter(movie => {
        return moviesIds.includes(movie.id) && tickets[movie.id] > 0
    })} />
}

export default BasketPage
