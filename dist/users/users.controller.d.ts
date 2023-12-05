import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, LoginResponse } from './interfaces/user-interface';
import { LoginDTO } from './dto/login-user.dto';
export declare class UsersController {
    private userServ;
    constructor(userServ: UsersService);
    signUp(user: CreateUserDTO): Promise<SignUpResponse>;
    login(doc: LoginDTO): Promise<LoginResponse>;
}
