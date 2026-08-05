import { Controller, Body, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import * as contactTypes from '../types/contactTypes';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}
  
  @Post()
  saveUserMessage(@Body() body: contactTypes.TUserMessage) {
    return this.contactService.saveUserMessage(body)
  }
}
