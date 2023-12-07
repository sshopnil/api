import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class ConfigService {
  private readonly webSocketProtocol = 'ws'; // or 'wss' for secure WebSocket
  private readonly webSocketHost = 'example.com';
  private readonly webSocketPort = 3000;

  getWebSocketUrl(): string {
    return `${this.webSocketProtocol}://${this.webSocketHost}:${this.webSocketPort}`;
  }
}