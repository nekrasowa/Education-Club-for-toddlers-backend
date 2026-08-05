import { Controller, Get } from '@nestjs/common';

import { AboutService } from './about.service';
import { TParentsComment } from '../types/aboutTypes';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getParentsComments(): TParentsComment[] {
    return this.aboutService.getParentsComments();
  }
}
