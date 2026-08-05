import { Injectable } from '@nestjs/common';
import { SaveUserMessageDto } from './save-user-message.dto';
import { TUserMessage } from '../types/contactTypes';

@Injectable()
export class ContactService {
  private usersMessages: TUserMessage[] = [];

  saveUserMessage(body: SaveUserMessageDto) {
    this.usersMessages.push({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone_number: body.phone_number || 'no phone number',
      message_text: body.message_text,
    });
    return this.usersMessages;
  }
}
