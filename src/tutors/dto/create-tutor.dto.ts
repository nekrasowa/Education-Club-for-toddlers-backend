import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

const minLength_2: number = 2;
const minLength_5: number = 5;
const minLength_20: number = 20;

export class CreateTutorDto {
  @IsNotEmpty({ message: 'Name can`t be empty' })
  @MinLength(minLength_2, {
    message: `Name can't be shorter then ${minLength_2}`,
  })
  first_name!: string;

  @IsNotEmpty({ message: 'Last name can`t be empty' })
  @MinLength(minLength_2, {
    message: `Last name can't be shorter then ${minLength_2}`,
  })
  last_name!: string;

  @IsEmail({}, { message: 'Add your email' })
  email!: string;

  @IsPhoneNumber()
  phone_number!: string;

  @IsNotEmpty({ message: 'Name can`t be empty' })
  @MinLength(minLength_5, {
    message: `Name can't be shorter then ${minLength_5}`,
  })
  lesson_name!: string;

  @IsNotEmpty({ message: 'Name can`t be empty' })
  @MinLength(minLength_20, {
    message: `Name can't be shorter then ${minLength_20}`,
  })
  lesson_description!: string;

  @IsNotEmpty({ message: 'Status should be chosen' })
  isVisible!: boolean;
}
