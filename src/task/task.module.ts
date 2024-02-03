import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskServices } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Address])],
  controllers: [TaskController],
  providers: [TaskServices],
})
export class TaskModule {}
