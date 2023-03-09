import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITask, TaskStatus } from 'src/types/interface/task.interface';

export type TaskDocument = HydratedDocument<ITask>;

@Schema()
export class Task implements ITask {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ required: true })
  status: TaskStatus;

  @Prop({ required: true })
  date: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
