import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';
import { SellerController } from './seller/seller.controller';
import { SellerService } from './seller/seller.service';
import { SellerSchema } from './seller/seller.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Users', schema: UserSchema}, {name: 'sellers', schema: SellerSchema}])],
  providers: [UsersService, PasswordHasherService, SellerService],
  controllers: [UsersController, SellerController]
})
export class UsersModule {}
