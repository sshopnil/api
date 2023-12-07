import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket} from 'socket.io';

@WebSocketGateway({
  cors:{
    origin: '*',
  },
})
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client) {
    console.log('Client connected');
  }

  handleDisconnect(client) {
    console.log('Client disconnected');
  }
  constructor(private readonly messagesService: MessagesService) {}
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: CreateMessageDto) {

    return data;
  }
  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message =  this.messagesService.create(createMessageDto);

    this.server.emit('message', message, ()=> console.log("on server", message));
    
    return message;
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom(@MessageBody('name') name: string, @ConnectedSocket() clint: Socket) {
    return this.messagesService.identify(name, clint.id)
  }
}
