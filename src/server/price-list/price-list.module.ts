import { Module } from '@nestjs/common';
import { PriceListService } from './services/price-list.service';
import { PriceListController } from './controllers/price-list.controller';
import { NextPriceListController } from './controllers/next-price-list.controller';

@Module({
  controllers: [PriceListController, NextPriceListController],
  providers: [PriceListService]
})
export class PriceListModule {}
