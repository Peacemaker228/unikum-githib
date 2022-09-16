import { Controller } from '@nestjs/common';
import { CustomDesignService } from '../services/custom-design.service';

@Controller('custom-design')
export class CustomDesignController {
  constructor(private readonly customDesignService: CustomDesignService) {}
}
