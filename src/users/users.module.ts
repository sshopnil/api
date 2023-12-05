import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { PasswordHasherService } from './auth/password-hasher/password-hasher.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Users', schema: UserSchema}])],
  providers: [UsersService, PasswordHasherService],
  controllers: [UsersController]
})
export class UsersModule {}
