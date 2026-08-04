import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassListController } from './class_list/class_list.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { ProgramsController } from './programs/programs.controller';
import { AboutController } from './about/about.controller';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [AppController, ClassListController, ScheduleController, ProgramsController, AboutController, BookController],
  providers: [AppService],
})
export class AppModule {}
