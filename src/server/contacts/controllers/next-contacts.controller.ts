import { Controller, Get, Render } from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';

@Controller('contacts')
export class NextContactsController {

    @Get()
    @Render("contacts")
    getContacts() {
        return {}
    }
}
