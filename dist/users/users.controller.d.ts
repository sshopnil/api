import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignUpResponse } from './interfaces/user-interface';
export declare class UsersController {
    private userServ;
    constructor(userServ: UsersService);
    signUp(user: CreateUserDTO): Promise<SignUpResponse>;
    hello(): string;
}
