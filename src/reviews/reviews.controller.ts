import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Req
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from '../enums/user-role.enum';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}


  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRole.PARENT)
  create(@Body() createReviewDto: CreateReviewDto, @Req() req) {
    console.log(req);
    return this.reviewsService.create(createReviewDto, req.user);
  }
  
  @Get()
  findAll(@Query('query') query: { limit: number; page: number }) {
    return this.reviewsService.findAll(query);
  }

  @Roles(UserRole.PARENT)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  updateText(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.updateText(+id, updateReviewDto);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  updateVisibility(@Param('id') id: string) {
    return this.reviewsService.updateVisibility(+id);
  }

  @Roles(UserRole.PARENT)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
