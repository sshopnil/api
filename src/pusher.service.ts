import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher'

@Injectable()
export class PusherService {

    pusher: Pusher;
    constructor(){
        this.pusher = new Pusher({
            appId: "1721155",
            key: "26da3f768ad00f1cc35e",
            secret: "0673e9c6241e6b2465c8",
            cluster: "ap1",
            useTLS: true
          });
    }
    async trigger(channel: string, event: string, data: any){
        await this.pusher.trigger(channel, event, data);
    }
    
}
