import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TaskStatus } from 'src/types/enum/task.enum';
import { ITask, Priority } from 'src/types/interface/task.interface';

export type TaskDocument = HydratedDocument<ITask>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  status: TaskStatus;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ type: String, required: true })
  createdBy: string;

  @Prop({ type: String, required: true })
  priority: Priority;

  @Prop({ type: String, required: false })
  createdAt: Date;

  @Prop({ type: String, required: false })
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
