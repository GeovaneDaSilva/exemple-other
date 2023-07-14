export interface ICheckStatus {
    getStatus: (receiptNum: string) => Promise<result>
  }

  export interface IGetStatusById {
    getStatus: (receiptNum: string) => Promise<result>
  }

  export interface ISaveStatus {
    getStatus: (receiptNum: string) => Promise<result>
  }
  
  type result  = {
    accountId?: string
    title: string,
    details: string
    typeCase?: string
    startEnd?: any
    tokenDevice?: string
  }