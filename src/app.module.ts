import { AboutModule } from './about/about.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { ClassListModule } from './class_list/class_list.module';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './contact/contact.module';
import { Module } from '@nestjs/common';
import { ProgramsModule } from './programs/programs.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TutorsModule } from './tutors/tutors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    AboutModule,
    BookModule,
    ClassListModule,
    ContactModule,
    ProgramsModule,
    ScheduleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'liudmyla',
      password: 'childrenforus',
      database: 'childreneducation',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TutorsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
