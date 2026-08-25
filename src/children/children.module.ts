import { Child } from './entities/child.entity';
import { ChildrenController } from './children.controller';
import { ChildrenService } from './children.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  controllers: [ChildrenController],
  providers: [ChildrenService]
})
export class ChildrenModule {}
