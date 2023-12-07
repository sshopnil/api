import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SellerDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'shop_name',
        type: String,
        example: 'Murads shop',
      })
    shop_name:string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        name: 'email',
        type: String,
        example: 'dev@gmail.com',
      })
    email:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'address',
        type: String,
        example: 'address*',
      })
    address: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'house',
        type: String,
        example: 'home addr*',
      })
    house:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'thana',
        type: String,
        example: 'thana',
      })
    thana:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'division',
        type: String,
        example: 'division*',
      })
    division:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'phone',
        type: String,
        example: 'phone no*',
      })
    phone:string

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        name: 'category',
        type: String,
        example: 'An array of caategories',
      })
    category:Array<String>

}