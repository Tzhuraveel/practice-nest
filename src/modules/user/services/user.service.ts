import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../database/entity/user.entity';
import { UserRepository } from '../../repository/services/user.repository';
import { UserCreateRequestDto } from '../model/dtos/request/user-create.request.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(dto: UserCreateRequestDto): Promise<UserEntity> {
    const userEntity = this.userRepository.create(dto);
    await this.userRepository.save(userEntity);
    return userEntity;
  }
}
