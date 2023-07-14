export interface target {
    where: string
    action: string
    owner: string
    time_in: string
    time_out: string
    time_section: string
    community: string
    failure: boolean

}

export interface headers {
    host: string
    connection: string
    accept: string
    origin: string
}

export interface handshake {
    headers: headers
    time: string
    address: string,
    accept: string
    origin: string


}

export interface socketConnected {
    id?: string,
    target?: target
    clicks?: number
    impressions?: number
    conversions?: number
    costs?: number
    token?: string
    origin?: string
    time_in?: string
    time_out?: string
    connection?: any
    headers?: string
    socket_ip?: string
    where?: string

}




interface IAccount {

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

export interface IAddress {

    street: string
    zipcode: number
    state: string
    Country: string
    apt: string

}