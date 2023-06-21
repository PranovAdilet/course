export interface IShippingFields {
    id?:number | string
    email:string
    name: string
    phone:number
    passport:string | number
    city:string
    role: string,
    surname: string,
    status: string
}
export interface ILoginFields{
    password: string
    email: string
}
export interface IUser extends IShippingFields{
    groups: []
    payments: []
}