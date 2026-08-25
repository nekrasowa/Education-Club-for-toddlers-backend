import { CreateReviewDto } from './create-review.dto';
import { PartialType } from '@nestjs/mapped-types';

const minLength_3: number = 3;

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
