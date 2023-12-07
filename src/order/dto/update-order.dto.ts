import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class UpdateOrderDTO {


    @IsString()
    @IsOptional()
    @ApiProperty({
        name: 'delivery date',
        type: String,
        example: 'date string',
    })
    del_date: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        name: 'delivery status',
        type: String,
        example: 'date status',
    })
    status: number
}