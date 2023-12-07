import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class OrderDTO {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'status',
        type: Number,
        example: 'order status',
    })
    status: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'price',
        type: String,
        example: 'total price',
    })
    price: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'delDate_start',
        type: String,
        example: 'date',
    })
    delDate_start: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'delDate_end',
        type: String,
        example: 'date',
    })
    delDate_end: string


    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        name: 'buyer_email',
        description: 'email of the buyer',
        type: String,
        example: 'dev@gmail.com'
    })
    buyer_email: string

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        name: 'product_ids',
        type: Array<number>,
        example: 'product_ids*'
    })
    product_ids: Array<number>


    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'buyer_address',
        type:String,
        example: 'address*'
    })
    buyer_address:string
}