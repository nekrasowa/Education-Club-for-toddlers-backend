import { Module } from '@nestjs/common';
import { ClassListService } from './class_list.service';
import { ClassListController } from './class_list.controller';

@Module({
  controllers: [ClassListController],
  providers: [ClassListService]
})
export class ClassListModule {}
