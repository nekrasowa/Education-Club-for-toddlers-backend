import { Controller, Get, Param } from '@nestjs/common';
import * as classesTypes from '../types/classesTypes';
import { ClassListService } from './class_list.service';

@Controller('class-list')
export class ClassListController {
  constructor(private readonly classListService: ClassListService) {}

  @Get()
  getClassesList(): classesTypes.TClassItem[] {
    return this.classListService.getClassesList();
  }

  @Get(':id')
  getClassById(@Param('id') id: string): classesTypes.TClassItem {
    return this.classListService.getClassById(id);
  }
}
