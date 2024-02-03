/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewService {
  getNew(): string {
    return 'new path created';
  }

}
