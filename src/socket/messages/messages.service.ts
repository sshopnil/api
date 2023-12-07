import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  message: Message[] = [{name: 'Evan', text: 'heeyoo' }]
  clintToUser = {};

  identify(name: string, clintId: string){
    this.clintToUser[clintId] = name;

    return Object.values(this.clintToUser);
  }

  getClintName(clintId: string){
    return this.clintToUser[clintId];
  }

  create(createMessageDto: CreateMessageDto) {
    const message = {...createMessageDto}
    this.message.push(message );// TODO Improve

    return message;
  }

  findAll() {
    return this.message;
  }
}
