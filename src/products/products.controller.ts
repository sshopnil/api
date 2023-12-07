import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/product.dto';
import { Product, UpdateProduct } from './interfaces/product';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly prodServ: ProductsService){}

    @Post('add')
    async addProd(@Body() prod : CreateProductDTO) :Promise<boolean>{
        return this.prodServ.addProduct(prod);
    }

    @Get()
    async getprod():Promise<Product[]>{
        return this.prodServ.getAllProd();
    }

    @Delete('prod_id')
    async deletebyid(@Param('prod_id') prod_id: number) : Promise<boolean>{
        return this.prodServ.delbyid(prod_id);
    }

    @Put(':id')
    async updateProd(
        @Param('id')
        id : number,
        @Body()
        updatedInfo : UpdateProductDTO
    ) : Promise <Product>{
        // console.log(updatedInfo);
        return this.prodServ.update(id, updatedInfo);
    }

    @Get(':id')
    async findbyId(@Param('id') id: number): Promise<Product>{
        return this.prodServ.getOne(id);
    }

}
