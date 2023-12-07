import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDTO{

    @IsNumber()
    @ApiProperty({
        name: 'product id',
        description: 'auto generated field (not required for body)',
        type:Number,
        example: '1'
    })
    prod_id:number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product name',
        description: 'name of the product to add',
        type:String,
        example: 'Murgir dim'
    })
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product image',
        description: 'must be added with product information',
        type:String,
        example: '<image_uri>'
    })
    image:string


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product price',
        description: 'price of the product in number type',
        type:Number,
        example: '10'
    })
    price:number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product quantity',
        description: 'quantity of the product that user have',
        type: Number,
        example: '50'
    })
    qty:number



    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product description',
        description: 'information and features about the product',
        type:String,
        example: 'text info....'
    })
    desc:string



    @IsNumber()
    @ApiProperty({
        name: 'product rating',
        description: 'rating provided by customers',
        type:Number,
        example: '50'
    })
    rating:number


    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        name: 'seller email',
        description: 'email of the seller',
        type:String,
        example: 'dev@gmail.com'
    })
    user_email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'products category',
        description: '1 for poltry, 2 for dairy, 3 for veg',
        type:Number,
        example: '1'
    })
    category: number
};


