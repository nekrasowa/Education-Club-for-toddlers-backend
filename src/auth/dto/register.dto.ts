import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

const minLength_3: number = 3;
const minLength_6: number = 6;

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(minLength_6, {
    message: `Password must be at least ${minLength_3} characters`
  })
  password!: string;

  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(minLength_3, {
    message: `Name must be at least ${minLength_3} characters`
  })
  first_name!: string;

  @IsNotEmpty({ message: 'Surname is required' })
  @MinLength(minLength_3, {
    message: `Password must be at least ${minLength_3} characters`
  })
  last_name!: string;
}
