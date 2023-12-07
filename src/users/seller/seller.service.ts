import { Get, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SellerInfo } from './seller.interface';
import { SellerDTO } from './seller.dto';

@Injectable()
export class SellerService {
    constructor(
        @InjectModel('sellers')
        private readonly userModel : Model<SellerInfo>
    ){}

    async sellerAdd(seller : SellerDTO):Promise<boolean>{
        const newSeller = new this.userModel(seller);
        newSeller.save();

        return true;
    }
    async getSeller(email: string) : Promise<SellerInfo>{
        return await this.userModel.findOne({email: email});
    }
}
