'use client'

import React, { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { Card } from '../card'

import styles from './styles.module.scss'

interface ModalProps {
    content: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ content }) => {
    const modalElement = document.querySelector('#modal')
    if (!modalElement) return
    const modal = createPortal(content, modalElement)
    const [isOpened, setIsOpened] = useState(false)

    return (
        <>
            <button
                onClick={() => {
                    setIsOpened(true)
                }}
            >
                show
            </button>
            {isOpened && (
                <>
                    <div
                        className={styles.backdrop}
                        onClick={() => {
                            setIsOpened(false)
                        }}
                    ></div>
                    <Card className={styles.modal}>{content}</Card>
                </>
            )}
        </>
    )
}
