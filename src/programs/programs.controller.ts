import { Controller, Get, Param } from '@nestjs/common';
import * as programTypes from '../types/programTypes';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Get()
  getProgramsList(): programTypes.TProgram[] {
    return this.programsService.getProgramsList();
  }

  @Get('id')
  getProgramById(@Param('id') id: string): programTypes.TProgram {
    return this.programsService.getProgramById(id);
  }
}
