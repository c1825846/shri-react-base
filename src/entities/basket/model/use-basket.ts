import type { RootState } from '@/app/store/store'
import { useSelector, useDispatch } from 'react-redux'
import * as slice from './slice'

export const useBasket = () => {
    const dispatch = useDispatch()
    const tickets = useSelector((state: RootState) => state.basket.tickets)
    const totalAmount = Object.values(tickets).reduce((a, i) => a + i, 0)
    const getAmountByMovieId = (movieId: string) => tickets[movieId] || 0
    const addOneTicket = (movieId: string) => dispatch(slice.addOneTicket(movieId))
    const removeOneTicket = (movieId: string) => dispatch(slice.removeOneTicket(movieId))
    const removeAllTickets = (movieId: string) => dispatch(slice.removeAllTickets(movieId))

    return {
        totalAmount,
        getAmountByMovieId,
        addOneTicket,
        removeOneTicket,
        removeAllTickets,
    }
}
