import { TickerCounter } from '@/entities/basket'
import { MovieCard } from '@/entities/movie'
import { ReviewList } from '@/entities/review'

import styles from './styles.module.scss'

const MoviePage = ({ params }: { params: { movieId: string } }) => {
    return (
        <div className={styles.page}>
            <MovieCard movieId={params.movieId} after={<TickerCounter movieId={params.movieId} />} />
            <ReviewList movieId={params.movieId} />
        </div>
    )
}

export default MoviePage
