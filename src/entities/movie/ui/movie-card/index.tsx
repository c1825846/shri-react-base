'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Card } from '@/shared/ui/card'
import { useGetMovieQuery } from '../../model'
import styles from './styles.module.scss'

interface MovieCardProps {
    movieId: string
    after: ReactNode
}

export const MovieCard: React.FC<MovieCardProps> = ({ movieId, after }) => {
    const { data, isLoading, error } = useGetMovieQuery(movieId)

    if (isLoading) return <div>loading</div>
    if (!data || error) return <div>error</div>
    const { posterUrl, title, description, genre, rating, director, releaseYear } = data

    return (
        <Card className={styles.card}>
            <Image
                className={styles.image}
                src={posterUrl}
                alt={`постер ${title}`}
                width={400}
                height={500}
                priority={true}
            />
            <div className={styles.info}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.basket}>{after}</div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.key}>Жанр:</div>
                        <div className={styles.value}>{genre}</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.key}>Год выпуска:</div>
                        <div className={styles.value}>{releaseYear}</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.key}>Рейтинг:</div>
                        <div className={styles.value}>{rating}</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.key}>Продюссер:</div>
                        <div className={styles.value}>{director}</div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.subtitle}>Описание</div>
                    <div>{description}</div>
                </div>
            </div>
        </Card>
    )
}
