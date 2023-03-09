import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './models/user.repository';
import { HttpError } from 'src/utils/api.utils';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    try {
      return this.userRepository.create(createUserDto);
    } catch (error) {
      HttpError(error);
    }
  }

  findAll() {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      HttpError(error);
    }
  }

  findOne(id: string) {
    try {
      return this.userRepository.findOne(id);
    } catch (error) {
      HttpError(error);
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return this.userRepository.updateById(id, updateUserDto);
    } catch (error) {
      HttpError(error);
    }
  }

  remove(id: string) {
    try {
      return this.userRepository.deleteById(id);
    } catch (error) {
      HttpError(error);
    }
  }
}
