import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email format is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password is required' })
  password: string;

  @IsNotEmpty({ message: 'firstname is required' })
  @IsString({ message: 'Firstname is string format' })
  firstName: string;

  @IsNotEmpty({ message: 'Lastname is required' })
  @IsString({ message: 'Lastname is string format' })
  lastName: string;

  @IsEnum(['admin', 'user'], { message: 'role is admin or user' })
  role: 'user' | 'admin';

  @IsBoolean()
  isActive: boolean;
}
