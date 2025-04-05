export interface Reservation {
    id: string,
    user_id: string,
    time: string,
    date: string,
    location: string,
    description?: string,
}