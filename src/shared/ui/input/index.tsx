import React from 'react'
import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
    onInput: (e?: React.SyntheticEvent) => void
    
}

export const Input: React.FC<InputProps> = ({ placeholder, onInput }) => {
    return <input type="text" className={styles.input} placeholder={placeholder} onInput={onInput} />
}
