import { IsString, IsDateString, IsEnum } from 'class-validator';
import { TaskStatus } from 'src/types/interface/task.interface';

export class CreateTaskDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsEnum(TaskStatus)
  status: string;
  @IsDateString()
  date: Date;
}
