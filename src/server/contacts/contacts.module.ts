import { Module } from '@nestjs/common';
import { ContactsService } from './services/contacts.service';
import { ContactsController } from './controllers/contacts.controller';
import { NextContactsController } from './controllers/next-contacts.controller';

@Module({
  controllers: [ContactsController, NextContactsController],
  providers: [ContactsService]
})
export class ContactsModule { }
