import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDTO{
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'name',
        description: "User's fullname",
        type: String,
        example: 'Usama bin',
      })
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        name: 'email',
        description: "User's Email",
        type: String,
        example: 'dev@company.com',
      })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'password',
        description: "User's password",
        type: String,
        example: '123abc',
      })
    password: string;

    @IsString()
    @ApiProperty({
        name: 'image',
        description: "User's profile picture source",
        type: String,
        example: '<image url>',
      })
    image: string;

    @IsString()
    @ApiProperty({
        name: 'role',
        description: "User's role in the application",
        type: String,
        example: 'general or exclusive',
      })
    user_role: string;
}