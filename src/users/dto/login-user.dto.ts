import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDTO{
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}