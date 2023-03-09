import { IsString, IsDateString, IsEnum } from 'class-validator';
import { TaskStatus } from 'src/types/enum/task.enum';
import { Priority } from 'src/types/interface/task.interface';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: string;

  @IsDateString()
  dueDate: Date;

  @IsString()
  createdBy: string;

  @IsString()
  priority: Priority;
}
