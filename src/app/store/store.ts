'use client'

import { configureStore } from '@reduxjs/toolkit'

import { movieApi } from '@/entities/movie'
import { reviewApi } from '@/entities/review'
import { cinemaApi } from '@/entities/cinema'
import { basketReducer } from '@/entities/basket'

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
        [cinemaApi.reducerPath]: cinemaApi.reducer,
        basket: basketReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(movieApi.middleware, reviewApi.middleware, cinemaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
