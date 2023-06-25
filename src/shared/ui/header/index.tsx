import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export interface HeaderProps {
    pageTitle: string
    sideInfo: ReactNode
}

export const Header: React.FC<HeaderProps> = ({ pageTitle, sideInfo }) => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.title}>
                {pageTitle}
            </Link>
            {sideInfo}
        </header>
    )
}
