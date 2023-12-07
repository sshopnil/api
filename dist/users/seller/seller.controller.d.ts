import { SellerService } from './seller.service';
import { SellerInfo } from './seller.interface';
import { SellerDTO } from './seller.dto';
export declare class SellerController {
    private readonly sellerServ;
    constructor(sellerServ: SellerService);
    signUp(user: SellerDTO): Promise<boolean>;
    sellerGet(email: string): Promise<SellerInfo>;
}
