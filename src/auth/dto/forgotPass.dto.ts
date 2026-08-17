import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ForgotPassDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;
}
