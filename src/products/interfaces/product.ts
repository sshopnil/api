export interface Product{
    readonly prod_id?: number
    readonly name: string
    readonly image:string
    readonly price:number
    readonly qty:number
    readonly desc:string
    readonly rating?:number
    readonly user_email: string
    readonly category: number
}

export interface UpdateProduct{
    readonly name?: string
    readonly image?:string
    readonly price?:number
    readonly qty?:number
    readonly desc?:string
    readonly rating?:number
    readonly category?:number
}