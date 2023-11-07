import { Body, Controller, Post } from '@nestjs/common';

import { UserEntity } from '../../database/entity/user.entity';
import { UserCreateRequestDto } from './model/dtos/request/user-create.request.dto';
import { UserService } from './services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public createUser(@Body() dto: UserCreateRequestDto): Promise<UserEntity> {
    return this.userService.createUser(dto);
  }
}
