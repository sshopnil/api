import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse, LoginResponse, User } from './interfaces/user-interface';
import { LoginDTO } from './dto/login-user.dto';
export declare class UsersController {
    private userServ;
    constructor(userServ: UsersService);
    signUp(user: CreateUserDTO): Promise<SignUpResponse>;
    login(doc: LoginDTO): Promise<LoginResponse>;
    alluser(): Promise<User[]>;
    finbymail(email: string): Promise<User>;
    updateInfo(email: string): Promise<User>;
}
