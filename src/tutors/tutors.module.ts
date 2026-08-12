import { Module } from '@nestjs/common';
import { Tutor } from './entities/tutor.entity';
import { TutorsController } from './tutors.controller';
import { TutorsService } from './tutors.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tutor])],
  controllers: [TutorsController],
  providers: [TutorsService],
})
export class TutorsModule {}
