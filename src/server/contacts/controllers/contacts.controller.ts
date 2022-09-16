import { Controller } from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
}
