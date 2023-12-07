import { OrderService } from './order.service';
import { OrderDTO } from './dto/order.dto';
import { OrderItem } from './interfaces/order.interface';
import { UpdateOrderDTO } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderServ;
    constructor(orderServ: OrderService);
    addProd(order: OrderDTO): Promise<boolean>;
    findbyseller(email: string): Promise<OrderItem[]>;
    findbybuyer(email: string): Promise<OrderItem[]>;
    updateProd(id: number, updatedInfo: UpdateOrderDTO): Promise<OrderItem>;
}
