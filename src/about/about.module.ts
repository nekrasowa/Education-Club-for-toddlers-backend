import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
