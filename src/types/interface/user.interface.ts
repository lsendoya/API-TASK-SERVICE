import { UserState } from '../enum/user.enum';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  status: UserState;
}
