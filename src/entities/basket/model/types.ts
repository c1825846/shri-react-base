export interface Tickets {
    [movieId: string]: number
}

export interface BasketState {
    tickets: Tickets
}