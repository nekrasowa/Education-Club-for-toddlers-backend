import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
