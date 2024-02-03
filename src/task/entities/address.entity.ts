/* eslint-disable prettier/prettier */
import { Task } from '../entities/task.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  pin: number;

  @ManyToOne(() => Task, (task) => task.address, { onDelete: 'CASCADE'})
  @JoinColumn({ name: 'taskId' })
  task: Task;
}
