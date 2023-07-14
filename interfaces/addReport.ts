export interface IInfo{
    service_id: string
    type_service?: string
    other?: any
    
  }
  export interface IAddReport{
    socket_id: string
    _id: string
    path: string
    type: string
    qtd: number
    falure?: boolean
    info?: IInfo
  
  }