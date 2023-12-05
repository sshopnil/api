import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse } from './interfaces/user-interface';

@Controller('users')
export class UsersController {
    constructor(private userServ: UsersService){}

    @Post('signup')
    async signUp(@Body() user: CreateUserDTO): Promise<SignUpResponse>{
        return this.userServ.signup(user);
    }
    @Get('hello')
    hello(): string{
        return "helo there";
    }
}
