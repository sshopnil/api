import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PusherService } from './pusher.service';
import { channel } from 'diagnostics_channel';

@Controller()
export class AppController {
  constructor(private pusherService: PusherService){

  }
  @Post("messages")
  async messages(
    @Body("username") username: string,
    @Body("message") message: string
  ){
    await this.pusherService.trigger("chat",  "message", {
      username,
      message
    })

    

    return[];
  }
}
