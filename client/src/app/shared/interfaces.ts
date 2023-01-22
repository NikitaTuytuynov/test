export interface User {
    profileImage?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    hobbies?: string | null
    country?: string | null
    _id?: string
}

export interface Message{
    message: string
}