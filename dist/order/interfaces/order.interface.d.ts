export interface OrderItem {
    id?: number;
    del_date?: string;
    status: number;
    price: number;
    delDate_start: string;
    delDate_end: string;
    buyer_email: string;
    buyer_address: string;
    product_ids: Array<number>;
}
export interface UpdateOrderItem {
    id?: number;
    del_date?: string;
    status?: number;
    price?: number;
    delDate_start?: string;
    delDate_end?: string;
    buyer_email?: string;
    buyer_address?: string;
    product_ids?: Array<number>;
}
