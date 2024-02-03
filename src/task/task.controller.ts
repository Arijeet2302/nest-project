/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { TaskServices } from './task.service';
import { TaskDto } from './dto/task.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Task')
@Controller(`/user`)
export class TaskController {
  constructor(private taskservices: TaskServices) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  findAll() {
    return this.taskservices.findAll();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.taskservices.findUser(id);
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiBody({ type: TaskDto })
  @Post(`/create`)
  createUser(@Body() dto: TaskDto): Promise<{ msg: string }> {
    return this.taskservices.createUser(dto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number): Promise<{ msg: string }> {
    return this.taskservices.deleteUser(id);
  }

  @ApiOperation({ summary: 'Update user details' })
  @Put('/update/:id')
  updateUser(@Param('id') id:number, @Body() dto: TaskDto): Promise<{ msg: string }> {
    return this.taskservices.updateUser(id, dto);
  }

  @ApiOperation({ summary: 'Delete all users' })
  @Delete('/deleteAll')
  deleteAll(): Promise<{ msg: string }> {
    return this.taskservices.deleteAll();
  }
}
