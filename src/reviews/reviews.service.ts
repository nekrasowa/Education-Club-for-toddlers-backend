import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { GetReviewsDto } from './dto/get-reviews.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
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

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
