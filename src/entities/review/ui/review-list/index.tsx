'use client'

import React from 'react'
import { useGetReviewsQuery } from '../../model/api'
import { ReviewCard } from '../review-card'
import styles from './styles.module.scss'

interface ReviewListProps {
    movieId: string
}

export const ReviewList: React.FC<ReviewListProps> = ({ movieId }) => {
    const { data, isLoading, error } = useGetReviewsQuery(movieId)
    if (isLoading) return <div>loading</div>
    if (!data || error) return <div>error</div>
    return (
        <div className={styles.list}>
            {data.map(review => (
                <ReviewCard key={review.id} name={review.name} text={review.text} rating={review.rating} />
            ))}
        </div>
    )
}
