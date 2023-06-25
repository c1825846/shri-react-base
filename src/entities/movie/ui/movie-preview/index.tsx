import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/shared/ui/card'
import styles from './styles.module.scss'

export interface MoviePreviewProps {
    id: string
    title: string
    posterUrl: string
    genre: string
    after: ReactNode
}

export const MoviePreview: React.FC<MoviePreviewProps> = ({ id, title, posterUrl, genre, after }) => {
    return (
        <>
            <Card className={styles.card}>
                <Image
                    className={styles.image}
                    src={posterUrl}
                    alt={`постер ${title}`}
                    width={100}
                    height={120}
                    priority={true}
                />
                <div>
                    <Link href={`/movie/${id}`} className={styles.header}>
                        <div className={styles.title}>{title}</div>
                    </Link>
                    <div className={styles.genre}>{genre}</div>
                </div>
                {after}
            </Card>
        </>
    )
}
