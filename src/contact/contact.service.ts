import { Injectable } from '@nestjs/common';
import { SaveUserMessageDto } from './save-user-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMessage } from './user_message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(UserMessage)
    private userMessagesRepository: Repository<UserMessage>,
  ) {}

  saveUserMessage(body: SaveUserMessageDto) {
    const first_name = body.first_name;
    const last_name = body.last_name;
    const email = body.email;
    const phone_number = body.phone_number;
    const message_text = body.message_text;

    const userMessage = this.userMessagesRepository.create({
      first_name,
      last_name,
      email,
      phone_number,
      message_text,
    });

    return this.userMessagesRepository.save(userMessage);
  }
}
