import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Product, UpdateProduct } from './interfaces/product';
import { Connection, Model } from 'mongoose';
import { CreateProductDTO } from './dto/product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('products')
        private readonly productModel: Model<Product>,
        @InjectConnection() private connection: Connection
    ){}


    async addProduct(product : CreateProductDTO) : Promise<boolean>{
        const newProd = new this.productModel(product);
        await newProd.save();

        return true;
    }

    async getAllProd(): Promise<Product[]>{
        return this.productModel.find();
    }

    async delbyid(prod_id: number) : Promise<boolean>{
        const findProd = await this.productModel.findOne({prod_id});
        if(findProd){
            const delProd = await this.productModel.deleteOne({prod_id});
            return delProd.acknowledged;
        }
        else{
            throw new NotFoundException('Invalid product id provided!');
        }
    }

    async update(id: number, updatedProd: UpdateProductDTO): Promise<Product>{
        const findProd = await this.productModel.findOne({prod_id: id});
        // console.log(updatedProd);
        if(!findProd){
            throw new NotFoundException('Product not found!');
        }

        const {name, price, qty, desc, image, rating, category} = updatedProd;


        const filter = {prod_id: id};
        const updateItem = {
            name: name, 
            price: price, 
            qty: qty, 
            desc: desc, 
            image: image, 
            rating: rating, 
            category: category
        }

        const update = await this.productModel.findOneAndUpdate(filter, updatedProd, {new: true});

        return update;
    }

    async getOne(id : number):Promise<Product>{
        return await this.productModel.findOne({prod_id: id});
    }

    async findbymail(email: string):Promise<Product[]>{
        return await this.productModel.find({user_email: email});
    }
}
