// app.gateway.ts
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
import { ConfigService } from './app.service';
  
  @WebSocketGateway()
  export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    constructor(private readonly configService: ConfigService) {}
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: { username: string; message: string }) {
      this.server.emit('message', payload);
    }
  }
  