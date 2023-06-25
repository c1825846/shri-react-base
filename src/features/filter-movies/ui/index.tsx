'use client'

import React from 'react'
import { useGetCinemasQuery } from '@/entities/cinema'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import styles from './styles.module.scss'

interface FilterMoviesProps {
    className?: string
}

export const FilterMovies: React.FC<FilterMoviesProps> = ({ className }) => {
    const { data: cinemas, isLoading, error } = useGetCinemasQuery()
    if (isLoading) return <div>loading</div>
    if (!cinemas || error) {
        return <div>error</div>
    }

    return (
        <Card className={className}>
            <div className={styles.mainTitle}>Фильтр поиска</div>
            <div className={styles.filters}>
                <div>
                    <div className={styles.filterTitle}>Название</div>
                    <div className={styles.input}>
                        <Input placeholder="Введите название" />
                    </div>
                </div>
                <div>
                    <div className={styles.filterTitle}>Жанр</div>
                    <div className={styles.input}></div>
                </div>
                <div>
                    <div className={styles.filterTitle}>Кинотеатр</div>
                    <div className={styles.input}>
                        <Select options={cinemas.map(cinema => ({
                            text: cinema.name,
                            value: cinema.id
                        }))}/>
                    </div>
                </div>
            </div>
        </Card>
    )
}
