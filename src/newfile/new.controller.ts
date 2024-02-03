/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { NewService } from './new.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('New')
@Controller()
export class NewController {
  constructor(private readonly newService: NewService) {}

  @ApiOperation({ summary: 'Get new' })
  @Get(`/new`)
  getNew(): string {
    return this.newService.getNew();
  }

}
