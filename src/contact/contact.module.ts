import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMessage } from './user_message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserMessage])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
