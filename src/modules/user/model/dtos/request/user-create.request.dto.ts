import { PickType } from '@nestjs/swagger';

import { BaseUserRequestDto } from './base-user.request.dto';

export class UserCreateRequestDto extends PickType(BaseUserRequestDto, [
  'lastName',
  'firstName',
]) {}
