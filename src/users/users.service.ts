import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, User } from './interfaces/user-interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users')
        private readonly userModel : Model<User>,
    ){}
    async signup(user: CreateUserDTO): Promise<SignUpResponse>{
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
}
