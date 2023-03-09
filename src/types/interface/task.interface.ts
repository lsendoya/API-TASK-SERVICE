export interface ITask {
  name: string;
  description: string;
  status: TaskStatus;
  date: Date;
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}
