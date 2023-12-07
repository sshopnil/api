export interface OrderItem{
    id?:number
    del_date?: string
    status:number
    price:number
    delDate_start:string
    delDate_end:string
    seller_email:string
    phone:string
    buyer_email:string
    seller_address?:string
    buyer_address:string
}
export interface UpdateOrderItem{
    id?:number
    del_date?: string
    status?:number
    price?:number
    delDate_start?:string
    delDate_end?:string
    seller_email?:string
    phone?:string
    buyer_email?:string
    seller_address?:string
    buyer_address?:string
}