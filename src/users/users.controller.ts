import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, LoginResponse } from './interfaces/user-interface';
import { LoginDTO } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userServ: UsersService){}

    @Post('signup')
    async signUp(@Body() user: CreateUserDTO): Promise<SignUpResponse>{
        return this.userServ.signup(user);
    }
    
    @Post('login')
    async login(@Body() doc: LoginDTO) : Promise<LoginResponse>{
        return this.userServ.login(doc);
    }
}
