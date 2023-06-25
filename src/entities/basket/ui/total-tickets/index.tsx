'use client'

import React from 'react'
import Link from 'next/link'
import { BasketIcon } from '@/shared/ui/icons'
import { useBasket } from '../../model'
import styles from './styles.module.scss'

export const TotalTickets: React.FC = () => {
    const { totalAmount } = useBasket()
    return (
        <Link href="/basket" className={styles.link}>
            {!!totalAmount && <div className={styles.amount}>{totalAmount}</div>}
            <BasketIcon />
        </Link>
    )
}
