import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/faq">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
        </footer>
    )
}
