import React from 'react'
import { Card } from '@/shared/ui/card'
import { PhotoIcon } from '@/shared/ui/icons'
import { Review } from '../../model/types'
import styles from './styles.module.scss'

type ReviewCardProps = Omit<Review, 'id'>

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, rating }) => {
    return (
        <Card className={styles.card}>
            <div className={styles.image}>
                <PhotoIcon />
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.rating}>
                        Оценка: <span>{rating}</span>
                    </div>
                </div>
                <div className={styles.text}>{text}</div>
            </div>
        </Card>
    )
}
