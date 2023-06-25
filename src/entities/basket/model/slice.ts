import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BasketState } from './types'

const initialState: BasketState = {
    tickets: {},
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addOneTicket: (state, action: PayloadAction<string>) => {
            if (!state.tickets[action.payload]) {
                state.tickets[action.payload] = 0
            }
            if (state.tickets[action.payload] < 30) {
                state.tickets[action.payload]++
            }
        },
        removeOneTicket: (state, action: PayloadAction<string>) => {
            if (!state.tickets[action.payload]) {
                return
            }
            if (state.tickets[action.payload] > 0) {
                state.tickets[action.payload]--
            }
            if (state.tickets[action.payload] === 0) {
                delete state.tickets[action.payload]
            }
        },
        removeAllTickets: (state, action: PayloadAction<string>) => {
            if (!state.tickets[action.payload]) {
                return
            }
            if (state.tickets[action.payload] > 0) {
                delete state.tickets[action.payload]
            }
        },
    },
})

export const { addOneTicket, removeOneTicket, removeAllTickets } = basketSlice.actions

export const basketReducer = basketSlice.reducer
