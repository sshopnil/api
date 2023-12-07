import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, LoginResponse, User } from './interfaces/user-interface';
import { LoginDTO } from './dto/login-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userServ: UsersService){}

    @Post('signup')
    async signUp(@Body() user: CreateUserDTO): Promise<SignUpResponse>{
        return await this.userServ.signup(user);
    }

    @Post('login')
    async login(@Body() doc: LoginDTO) : Promise<LoginResponse>{
        return await this.userServ.login(doc);
    }

    @Get()
    async alluser() : Promise<User[]>{
        return await this.userServ.findAll();
    }

    @Get(':email')
    async finbymail(@Param('email') email: string): Promise<User>{
        return this.userServ.find(email);
    }

    @Put('/update/:email')
    async updateInfo(@Param('email') email : string): Promise<User>{
        return await this.userServ.updateStatus(email);
    }
}
