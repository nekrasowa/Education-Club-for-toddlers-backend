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
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';

@Module({
  imports: [],
  controllers: [AppController, ClassListController, ScheduleController, ProgramsController, AboutController, BookController, ContactController],
  providers: [AppService, AboutService, BookService, ClassListService, ProgramsService, ScheduleService, ContactService],
})
export class AppModule {}
