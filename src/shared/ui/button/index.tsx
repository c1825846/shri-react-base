import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface ButtonProps {
    children: React.ReactNode
    variant?: 'contained' | 'outlined'
    size?: 'small' | 'normal'
    disabled?: boolean
    onClick: (e: React.BaseSyntheticEvent) => void
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'contained',
    size = 'normal',
    onClick,
    disabled,
}) => {
    return (
        <button
            className={classNames(styles.button, styles[size], styles[variant])}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
