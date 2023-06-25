'use client'

import { Accordion } from '@/shared/ui/accordion'

const FaqPage = () => {
    const elements = [
        {
            title: 'Что такое Билетопоиск?',
            text: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
        },
        {
            title: 'Какой компании принадлежит Билетопоиск?',
            text: 'lorem ',
        },
        {
            title: 'Как купить билет на Билетопоиск?',
            text: 'lorem ',
        },
        {
            title: 'Как оставить отзыв на Билетопоиск?',
            text: 'lorem ',
        },
    ]
    return <Accordion elements={elements} />
}

export default FaqPage
