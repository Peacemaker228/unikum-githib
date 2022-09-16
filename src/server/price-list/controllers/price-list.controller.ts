import { Controller } from '@nestjs/common';
import { PriceListService } from '../services/price-list.service';

@Controller('price-list')
export class PriceListController {
  constructor(private readonly priceListService: PriceListService) {}
}
