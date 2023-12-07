import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class OrderDTO {
    @IsNumber()
    @ApiProperty({
        name: 'product id',
        description: 'auto generated field (not required for body)',
        type: Number,
        example: '*not required*'
    })
    id: number


    @IsString()
    @IsOptional()
    @ApiProperty({
        name: 'delivery date',
        type: String,
        example: 'date string',
    })
    del_date: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'delivery status',
        type: String,
        example: 'date status',
    })
    status: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        name: 'order price',
        type: String,
        example: 'total price',
    })
    price: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'expected delivery',
        type: String,
        example: 'date',
    })
    delDate_start: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'last delivery date',
        type: String,
        example: 'date',
    })
    delDate_end: string


    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        name: 'seller email',
        description: 'email of the seller',
        type: String,
        example: 'dev@gmail.com'
    })
    seller_email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'seller phone number',
        type:String,
        example: '+880151515115'
    })
    phone: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        name: 'buyer email',
        description: 'email of the buyer',
        type: String,
        example: 'dev@gmail.com'
    })
    buyer_email: string


    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'seller address',
        type:String,
        example: 'address*'
    })
    seller_address?:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'buyer address',
        type:String,
        example: 'address*'
    })
    buyer_address:string
}