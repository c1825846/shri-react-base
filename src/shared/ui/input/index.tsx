import React from 'react'
import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
    return <input type="text" className={styles.input} placeholder={placeholder} />
}
