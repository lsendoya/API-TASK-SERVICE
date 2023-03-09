import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserState } from 'src/types/enum/user.enum';
import { IUser } from 'src/types/interface/user.interface';

export type UserDocument = HydratedDocument<IUser>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: false })
  createdAt: Date;

  @Prop({ type: String, required: false })
  updatedAt: Date;

  @Prop({ type: String, required: true })
  status: UserState;
}

export const UserSchema = SchemaFactory.createForClass(User);
