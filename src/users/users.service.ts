import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, User } from './interfaces/user-interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users')
        private readonly userModel : Model<User>,
        private readonly hasherService : PasswordHasherService
    ){}
    async signup(user: CreateUserDTO): Promise<SignUpResponse>{

        //if email exist send error

        const finduser = await this.userModel.findOne({email: user.email});

        if(finduser){
            throw new UnauthorizedException(`user already created with this ${user.email}`)
        }

        //encrypt the user pass before saving
        const encryptedPass = this.hasherService.hashPassword(user.password);

        const newUser = new this.userModel({
            name: user.name,
            password: encryptedPass,
            image: user?.image,
            email: user.email,
            user_role: user?.user_role
        });
        await newUser.save()
        return {email: user.email};
    }
}
