import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class LoginDTO{
    @IsEmail()
    @IsNotEmpty()
    @IsString()
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
}