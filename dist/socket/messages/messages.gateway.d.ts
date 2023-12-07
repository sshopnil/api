import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
export declare class MessagesGateway {
    private readonly messagesService;
    server: Server;
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    constructor(messagesService: MessagesService);
    handleEvent(data: CreateMessageDto): CreateMessageDto;
    create(createMessageDto: CreateMessageDto): Promise<{
        name: string;
        text: string;
    }>;
    findAll(): import("./entities/message.entity").Message[];
    joinRoom(name: string, clint: Socket): unknown[];
}
