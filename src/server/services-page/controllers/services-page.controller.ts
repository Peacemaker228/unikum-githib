import { Controller } from '@nestjs/common';
import { ServicesPageService } from '../services/services-page.service';

@Controller('services-page')
export class ServicesPageController {
  constructor(private readonly servicesPageService: ServicesPageService) {}
}
