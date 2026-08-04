import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesController } from './classes/classes.controller';
import { ClassListController } from './class_list/class_list.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { ProgramController } from './program/program.controller';
import { ProgramsController } from './programs/programs.controller';
import { AboutController } from './about/about.controller';

@Module({
  imports: [],
  controllers: [AppController, ClassesController, ClassListController, ScheduleController, ProgramController, ProgramsController, AboutController],
  providers: [AppService],
})
export class AppModule {}
