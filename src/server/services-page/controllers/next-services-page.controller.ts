import { Controller, Get, Render } from '@nestjs/common';

@Controller('services-page')
export class NextServicesPageController {
  @Get()
  @Render('services-page')
  getServicesPage() {
    return {};
  }
}
