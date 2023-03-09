import { IsString, IsEmail, IsEnum } from 'class-validator';
import { UserState } from 'src/types/enum/user.enum';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsEnum(UserState)
  status: string;
}
