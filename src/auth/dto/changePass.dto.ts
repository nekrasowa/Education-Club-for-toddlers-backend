import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ChangePassDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  newPassword!: string;
}
