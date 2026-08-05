import { Controller, Get, Param } from '@nestjs/common';
import * as classesTypes from '../types/classesTypes';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  getClassById(@Param('id') id: string): classesTypes.TClassItem {
    return this.bookService.getClassById(id);
  }
}
