import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateProductDTO{
    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'product name',
        description: 'name of the product to add',
        type:String,
        example: 'Murgir dim'
    })
    name: string

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'product image',
        description: 'must be added with product information',
        type:String,
        example: '<image_uri>'
    })
    image:string


    @IsOptional()
    @IsNumber()
    @ApiProperty({
        name: 'product price',
        description: 'price of the product in number type',
        type:Number,
        example: '10'
    })
    price:number


    @IsOptional()
    @IsNumber()
    @ApiProperty({
        name: 'product quantity',
        description: 'quantity of the product that user have',
        type: Number,
        example: '50'
    })
    qty:number


    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'product description',
        description: 'information and features about the product',
        type:String,
        example: 'text info....'
    })
    desc:string


    @IsOptional()
    @IsNumber()
    @ApiProperty({
        name: 'product rating',
        description: 'rating provided by customers',
        type:Number,
        example: '50'
    })
    rating:number

    @IsString()
    @IsOptional()
    @ApiProperty({
        name: 'products category',
        description: '1 for poltry, 2 for dairy, 3 for veg',
        type:Number,
        example: '1'
    })
    category: number
}