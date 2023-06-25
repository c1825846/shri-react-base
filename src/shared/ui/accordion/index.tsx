import React, { useState } from 'react'
import classNames from 'classnames'
import { Card } from '../card'
import { ArrowIcon } from '../icons'
import styles from './styles.module.scss'

interface AccordionElement {
    title: string
    text: string
}

interface AccordionProps {
    elements: AccordionElement[]
}

export const Accordion: React.FC<AccordionProps> = ({ elements }) => {
    const [openedElement, setOpenedElenemt] = useState<AccordionElement | null>(null)

    return (
        <div className={styles.accordion}>
            {elements.map(element => (
                <Card key={element.title} className="element">
                    <div
                        className={classNames(styles.title, { [styles.opened]: openedElement === element })}
                        onClick={() => {
                            openedElement === element ? setOpenedElenemt(null) : setOpenedElenemt(element)
                        }}
                    >
                        {element.title}
                        <ArrowIcon />
                    </div>
                    {openedElement === element && <div className={styles.text}>{element.text}</div>}
                </Card>
            ))}
        </div>
    )
}
