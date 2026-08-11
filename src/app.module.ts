import { AboutModule } from './about/about.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ClassListModule } from './class_list/class_list.module';
import { ContactModule } from './contact/contact.module';
import { Module } from '@nestjs/common';
import { ProgramsModule } from './programs/programs.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    AboutModule,
    BookModule,
    ClassListModule,
    ContactModule,
    ProgramsModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
