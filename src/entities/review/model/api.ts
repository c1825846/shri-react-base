'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Review } from './types'

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: builder => ({
        getReviews: builder.query<Review[], string>({
            query: (movieId) => `reviews/?movieId=${movieId}`
        })
    }),
})

export const { useGetReviewsQuery } = reviewApi
