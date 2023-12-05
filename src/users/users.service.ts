import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginResponse, SignUpResponse, User } from './interfaces/user-interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';
import { LoginDTO } from './dto/login-user.dto';

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
        const encryptedPass = await this.hasherService.hashPassword(user.password);

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

    async login(doc: LoginDTO) : Promise<LoginResponse> {
        const finduser = await this.userModel.findOne({email: doc.email});

        //checking user mail
        if(!finduser){
            throw new UnauthorizedException(`${doc.email}, Invalid email`)
        }

        //checking user pass
        const matchedPass = await this.hasherService.comparePassword(doc.password, finduser.password);
        if(matchedPass){
            return {token: 'ok'}
        }   
        else{
            throw new UnauthorizedException(`Invalid Password`);
        }
    }

    async findAll(): Promise<User[]>{
        const users = await this.userModel.find();
        return users;
    }
}
