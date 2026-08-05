import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassListController } from './class_list/class_list.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { ProgramsController } from './programs/programs.controller';
import { AboutController } from './about/about.controller';
import { BookController } from './book/book.controller';
import { AboutService } from './about/about.service';
import { BookService } from './book/book.service';
import { ClassListService } from './class_list/class_list.service';
import { ProgramsService } from './programs/programs.service';
import { ScheduleService } from './schedule/schedule.service';

@Module({
  imports: [],
  controllers: [AppController, ClassListController, ScheduleController, ProgramsController, AboutController, BookController],
  providers: [AppService, AboutService, BookService, ClassListService, ProgramsService, ScheduleService],
})
export class AppModule {}
