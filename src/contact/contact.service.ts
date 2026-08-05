import { Injectable } from '@nestjs/common';
import { TUserMessage } from '../types/contactTypes';

const usersMessages: TUserMessage[] = [];

@Injectable()
export class ContactService {
  saveUserMessage(body: TUserMessage) {
    usersMessages.push({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone_number: body.phone_number,
      message_text: body.message_text,
    });
    return usersMessages
  }
}
