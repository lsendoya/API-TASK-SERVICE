import { TaskStatus } from '../enum/task.enum';

export interface ITask {
  createdAt: Date;
  createdBy: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  status: TaskStatus;
  title: string;
  updatedAt: Date;
}

export type Priority = 'low' | 'medium' | 'high';
