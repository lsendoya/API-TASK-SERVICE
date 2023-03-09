import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './models/task.repository';
import { HttpError } from 'src/utils/api.utils';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      return this.taskRepository.create(createTaskDto);
    } catch (error) {
      HttpError(error);
    }
  }

  findAll() {
    try {
      return this.taskRepository.findAll();
    } catch (error) {
      HttpError(error);
    }
  }

  findOne(id: string) {
    try {
      return this.taskRepository.findOne(id);
    } catch (error) {
      HttpError(error);
    }
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      return this.taskRepository.updateById(id, updateTaskDto);
    } catch (error) {
      HttpError(error);
    }
  }

  remove(id: string) {
    try {
      return this.taskRepository.deleteById(id);
    } catch (error) {}
  }
}
