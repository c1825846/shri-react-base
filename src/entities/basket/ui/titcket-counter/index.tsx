'use client'

import React from 'react'
import { Button } from '@/shared/ui/button'
import { MinusIcon, PlusIcon } from '@/shared/ui/icons'
import { useBasket } from '../../model'
import { Modal } from '@/shared/ui/modal'
import styles from './styles.module.scss'

interface TickerCounterProps {
    movieId: string
}

export const TickerCounter: React.FC<TickerCounterProps> = ({ movieId }) => {
    const { getAmountByMovieId, addOneTicket, removeOneTicket } = useBasket()
    const ticketsAmount = getAmountByMovieId(movieId)
    return (
        <div className={styles.counter}>
            <Modal content={<>adf</>}/>
            <Button
                size="small"
                disabled={ticketsAmount <= 0}
                onClick={e => {
                    e.preventDefault()
                    removeOneTicket(movieId)
                }}
            >
                <MinusIcon />
            </Button>
            {ticketsAmount}
            <Button
                size="small"
                disabled={ticketsAmount >= 30}
                onClick={e => {
                    e.preventDefault()
                    addOneTicket(movieId)
                }}
            >
                <PlusIcon />
            </Button>
        </div>
    )
}
