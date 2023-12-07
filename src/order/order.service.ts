import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { OrderItem } from './interfaces/order.interface';
import { OrderDTO } from './dto/order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('orders')
        private readonly orderModel: Model<OrderItem>,
        @InjectConnection() private connection: Connection
    ){}

    async createOrder(order: OrderDTO) : Promise<boolean> {
        const newOrder = new this.orderModel(order);
        await newOrder.save();

        return true;
    } 

    async findbySellermail(email: string):Promise<OrderItem[]>{
        return await this.orderModel.find({seller_email: email});
    }

    async findbyBuyermail(email: string):Promise<OrderItem[]>{
        return await this.orderModel.find({buyer_email: email});
    }

    async updateAction(id: number, orderUpdate: UpdateOrderDTO): Promise<OrderItem>{
        const findProd = await this.orderModel.findOne({id});
        // console.log(updatedProd);
        if(!findProd){
            throw new NotFoundException('Product not found!');
        }

        const filter = {id};

        const update = await this.orderModel.findOneAndUpdate(filter, orderUpdate, {new: true});

        return update;
    }
}
