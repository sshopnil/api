import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PusherService } from './pusher.service';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/soil-society-db'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PusherService,AppGateway],
})
export class AppModule {}
