import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.service';

@Module({
  providers: [WebsocketGateway],
})
export class GatewayModule {}
