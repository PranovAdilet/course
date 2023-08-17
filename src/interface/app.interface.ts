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
export interface IGroup {
    id?:number | string | undefined
    email:string
    name: string
    phone:number
    passport:string | number
    city:string
    role: string,
    surname: string,
    status: string,
    password: string | number,
    payments: [],
    groups: [],

}

export interface ICourseGroup {
    name : string
    mentor: string,
    support: string
}

export interface ICourse {
    name : string
    mentor: string,
    support: string,
    id: number | string,
    personName: number[]
}

