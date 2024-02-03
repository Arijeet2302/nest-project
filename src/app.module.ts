/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewModule } from './newfile/new.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { postgresdb } from './config/config'
import { GatewayModule } from './websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => postgresdb(),
    }),
    NewModule,
    TaskModule,
    GatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
