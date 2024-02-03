import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from './dto/task.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class TaskServices {
  constructor(
    @InjectRepository(Task)
    private taskrepository: Repository<Task>,
    @InjectRepository(Address)
    private readonly addressrepository: Repository<Address>,
  ) {}

  async findAll() {
    return await this.taskrepository.find({
      relations: {
        address: true,
      },
    });
  }

  async findUser(id: number) {
    const options: FindOneOptions<Task> = {
      where: {
        id: id,
      },
      relations: {
        address: true,
      },
    };

    return await this.taskrepository.findOne(options);
  }

  async createUser(taskdto: TaskDto): Promise<{ msg: string }> {
    const users = await this.taskrepository.find({
      where: { name: taskdto.user.name },
    });

    if (users.length > 0) {
      return { msg: 'User already exists' };
    }

    const task = this.taskrepository.create(taskdto.user);
    const address = this.addressrepository.create(taskdto.address);

    await this.taskrepository.save(task);

    address.forEach((a) => (a.task = task));

    await this.addressrepository.save(address);

    return { msg: 'User created' };
  }

  async deleteUser(id: number): Promise<{ msg: string }> {
    await this.taskrepository.delete(id);
    return { msg: 'User deleted' };
  }

  async updateUser(id: number, taskdto: TaskDto): Promise<{ msg: string }> {
    await this.taskrepository.update(id, taskdto.user);
    return { msg: 'User updated' };
  }

  async deleteAll(): Promise<{ msg: string }> {
    await this.taskrepository.delete({});
    return { msg: 'All users deleted' };
  }
}
