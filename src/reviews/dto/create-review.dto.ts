import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

const minLength_3: number = 3;

export class CreateReviewDto {
  @IsNotEmpty({ message: 'Email is required' })
  @MinLength(minLength_3, {
    message: `Review must be at least ${minLength_3} characters`
  })
  review_text!: string;
}
