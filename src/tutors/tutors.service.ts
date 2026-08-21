import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { Tutor } from './entities/tutor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepository: Repository<Tutor>
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
        id
      }
    });
  }

  async update(id: number, body: UpdateTutorDto) {
    const tutor = await this.tutorRepository.findOne({
      where: { id }
    });

    if (!tutor) {
      throw new NotFoundException('Tutor not found');
    }

    return this.tutorRepository.update(id, body);
  }

  remove(id: number) {
    return this.tutorRepository.delete(id);
  }
}
