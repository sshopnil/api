import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
export declare class MessagesService {
    message: Message[];
    clintToUser: {};
    identify(name: string, clintId: string): unknown[];
    getClintName(clintId: string): any;
    create(createMessageDto: CreateMessageDto): {
        name: string;
        text: string;
    };
    findAll(): Message[];
}
