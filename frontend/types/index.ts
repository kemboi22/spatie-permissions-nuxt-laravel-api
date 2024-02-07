interface Default {
    id?: number,
    created_at?: Date
    updated_at?: Date
}
export type RegisterUser = User & { confirm_password: string }
export type LoginUser = {
    email: string
    password: string
}
export interface User extends Default{
    name: string
    email: string
    password?: string
}
