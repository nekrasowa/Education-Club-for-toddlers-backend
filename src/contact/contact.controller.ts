import { Controller, Body, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { SaveUserMessageDto } from './save-user-message.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  saveUserMessage(@Body() body: SaveUserMessageDto) {
    return this.contactService.saveUserMessage(body);
  }
}
