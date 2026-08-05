import { Controller, Get, Param } from '@nestjs/common';
import * as programTypes from '../types/programTypes';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsController: ProgramsController) {}

  @Get()
  getProgramsList(): programTypes.TProgram[] {
    return this.programsController.getProgramsList();
  }

  @Get('id')
  getProgramById(@Param('id') id: string): programTypes.TProgram {
    return this.programsController.getProgramById(id);
  }
}
