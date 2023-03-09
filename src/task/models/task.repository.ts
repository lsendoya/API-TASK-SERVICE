import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(data: CreateTaskDto): Promise<Task> {
    const task = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return this.taskModel.create(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async updateById(id: string, data: UpdateTaskDto): Promise<Task> {
    const task = {
      ...data,
      updatedAt: new Date(),
    };
    return this.taskModel.findOneAndUpdate({ _id: id }, task, { new: true });
  }

  async deleteById(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }
}
