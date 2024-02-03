import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  text: string;
}

export class addressDto {
  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  pin: number;
}

export class TaskDto {
  @ApiProperty()
  user: userDto;

  @ApiProperty({ type: () => addressDto, isArray: true })
  address: addressDto[];
}
