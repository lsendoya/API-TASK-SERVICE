import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async updateById(id: string, data: UpdateUserDto): Promise<User> {
    const user = {
      ...data,
      updatedAt: new Date(),
    };
    return this.userModel.findOneAndUpdate({ _id: id }, user, { new: true });
  }

  async deleteById(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
