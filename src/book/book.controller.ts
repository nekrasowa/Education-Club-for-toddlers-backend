import { Controller, Get, Param } from '@nestjs/common';
import * as classesTypes from '../types/classesTypes';


@Controller('book')
export class BookController {

   @Get(':id')
      getClassById(@Param('id') id: string): classesTypes.TClassItem {
      
      return {
        id: `${id}`,
        day: 'Thursday',
        print_date: 'June 29',
        tutorId: 't-4',
        tutor: 'Sam Smith',
        activity: 'DIY Crafts',
        age_group: '6-8',
        time: '16:15-17:15',
        duration: '1',
        freeSpots: 3,
        price: '24 RON',
        description: 'Create simple DIY projects using everyday materials.',
      }}
}
