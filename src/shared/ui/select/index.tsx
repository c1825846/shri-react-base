'use client'

import React from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'

interface SelectOption {
    text: string
    value: any
}

interface SelectProps {
    selected?: SelectOption
    options: SelectOption[]
}

export const Select: React.FC<SelectProps> = ({ selected, options }) => {
    const dropdownElement = document.querySelector('#dropdown')

    return (
        <div className={styles.select}>
            <div className={styles.selected}>{selected?.text}</div>
            {dropdownElement && createPortal(<div className={styles.list}></div>, dropdownElement)}
        </div>
    )
}
