export interface IAlert{
    isOpen: boolean
    header?: string
    subHeader?: string
    message: string
    classSCSS?: string
    present?: ()=> void

  
}