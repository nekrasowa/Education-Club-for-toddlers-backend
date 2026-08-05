import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class SaveUserMessageDto {
  @IsNotEmpty({message: 'Name can`t be empty'})
  @MinLength(2, {message: 'Name can`t be shorter then 2'})
  first_name!: string;

  @IsNotEmpty({message: 'Last name can`t be empty'})
  @MinLength(2, {message: 'Last name can`t be shorter then 2'})
  last_name!: string;

  @IsEmail({}, {message: 'Add your email'})
  email!: string;

  @IsPhoneNumber(undefined, {message: 'Add your зрщту тгьиук'})
  phone_number?: string;
  
  @IsNotEmpty({message: 'Can`t be empty'})
  message_text!: string;
}