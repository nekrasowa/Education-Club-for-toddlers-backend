import {
  Injectable,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
  Body,
} from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { Tutor } from './entities/tutor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepository: Repository<Tutor>,
  ) {}

  createNewTutor(body: CreateTutorDto) {
    const newTutor = this.tutorRepository.create(body);

    return this.tutorRepository.save(newTutor);
  }

  findAll() {
    return this.tutorRepository.find();
  }

  findOne(id: number) {
    return this.tutorRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateTutorDto) {
    return this.tutorRepository.update(id, body);
  }

  remove(id: number) {
    return this.tutorRepository.delete(id);
  }
}
