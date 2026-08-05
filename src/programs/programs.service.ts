import { Injectable } from '@nestjs/common';
import { TProgram } from '../types/programTypes';

@Injectable()
export class ProgramsService {
  getProgramsList(): TProgram[] {
    return [
      {
        programTitle: 'Online Character Creation Class',
        price: 65,
        steps: 10,
        id: 1,
        // imgSrc: program1,
        description:
          'An interactive online class where you learn how to create compelling characters, from developing their personality and backstory to designing their visual appearance.',
        instructors: ['Sam Hog', 'Matty Smith'],
      },
      {
        programTitle: 'Online Comic Class',
        price: 45,
        steps: 5,
        id: 2,
        // imgSrc: program2,
        description:
          'An interactive online class that teaches you how to create comics step by step — including storytelling, character development, composition, and panel design.',
        instructors: ['Sam Smith'],
      },
      {
        programTitle: 'Online Introduction to Drawing',
        price: 50,
        steps: 7,
        id: 3,
        // imgSrc: program3,
        description:
          'An online introductory class that teaches the fundamentals of drawing, such as line work, shapes, perspective basics, and simple sketching exercises.',
        instructors: ['Dicky Roper'],
      },
    ];
  }

  getProgramById(id: string): TProgram {
    return {
      programTitle: 'Online Introduction to Drawing',
      price: 50,
      steps: 7,
      id: Number(id),
      // imgSrc: program3,
      description:
        'An online introductory class that teaches the fundamentals of drawing, such as line work, shapes, perspective basics, and simple sketching exercises.',
      instructors: ['Dicky Roper'],
    };
  }
}
