import { Module } from '@nestjs/common';
import { ServicesPageService } from './services/services-page.service';
import { ServicesPageController } from './controllers/services-page.controller';
import { NextServicesPageController } from './controllers/next-services-page.controller';

@Module({
  controllers: [ServicesPageController, NextServicesPageController],
  providers: [ServicesPageService],
})
export class ServicesPageModule {}
