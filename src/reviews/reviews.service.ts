import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { GetReviewsDto } from './dto/get-reviews.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { DeleteResult, Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @InjectRepository(Review)
    private userRepository: Repository<User>
  ) {}

  async create(createReviewDto: CreateReviewDto, userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newReview = this.reviewRepository.create({
      user_id: user.id,
      user_name: user.first_name,
      child_name: '',
      text: createReviewDto.review_text,
      isVisible: false
    });

    return this.reviewRepository.save(newReview);
  }

  async findAll(query: GetReviewsDto) {
    const { limit = 10, page = 1 } = query;

    const [reviews, total] = await this.reviewRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
      order: {
        created_at: 'DESC'
      }
    });

    return {
      reviews,
      total,
      page,
      limit
    };
  }

  async updateText(id: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewRepository.findOne({
      where: { id }
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    if (!updateReviewDto.review_text) {
      throw new BadRequestException('Review text is required');
    }

    review.text = updateReviewDto.review_text;
    const updatedReview = await this.reviewRepository.save(review);

    return updatedReview;
  }

  async updateVisibility(id: number) {
    const review = await this.reviewRepository.findOne({
      where: { id }
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    review.isVisible = !review.isVisible;
    await this.reviewRepository.save(review);

    return review;
  }

  async remove(id: number) {
    const review = await this.reviewRepository.findOne({
      where: { id }
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    const result: DeleteResult = await this.reviewRepository.delete(review);

    if (result.affected === 0) {
      throw new NotFoundException('Review not found');
    }

    return {
      message: 'Review deleted successfully'
    };
  }
}
