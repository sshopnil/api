import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerInfo } from './seller.interface';
import { SellerDTO } from './seller.dto';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerServ : SellerService){}

    // @Get()
    // async test(): Promise<string>{
    //     return "hello";
    // }


    @Post('/add')
    async signUp(@Body() user: SellerDTO): Promise<boolean>{
        return this.sellerServ.sellerAdd(user);
    }
    @Get(':email')
    async sellerGet(@Param('email') email: string): Promise<SellerInfo>{
        return this.sellerServ.getSeller(email);
    }
}
