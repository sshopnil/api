import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dto/order.dto';
import { OrderItem, UpdateOrderItem } from './interfaces/order.interface';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly orderServ: OrderService){}

    @Post('add')
    async addProd(@Body() order : OrderDTO) :Promise<boolean>{
        return this.orderServ.createOrder(order);
    }


    @Get('seller/:email')
    async findbyseller(@Param('email') email: string): Promise<OrderItem[]>{
        return this.orderServ.findbySellermail(email);
    }

    @Get('buyer/:email')
    async findbybuyer(@Param('email') email: string): Promise<OrderItem[]>{
        return this.orderServ.findbyBuyermail(email);
    }

    @Put(':id')
    async updateProd(
        @Param('id')
        id : number,
        @Body()
        updatedInfo : UpdateOrderDTO
    ) : Promise <OrderItem>{
        return this.orderServ.updateAction(id, updatedInfo);
    }

}
