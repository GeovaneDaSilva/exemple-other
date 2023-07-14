export interface IAccount {

    id: string
    _id?: string
    name: string
    last_name?: string
    email?: string
    phone?: number
    image?: string
    role?: string
    address: IAddress
    token?: string



}

export interface IDataResponse{
    data: IAccountAPI
    status: number
    Account?: IAccount
}

export interface IAccountAPI{
    Account: IAccount
    token: string
    status?: number
    

}

export interface IAddress {

    street: string
    zipcode: number
    state: string
    Country: string
    apt: string

}