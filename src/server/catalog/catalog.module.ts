import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [CatalogController],
  providers: [CatalogService, ConfigService],
})
export class CatalogModule {}
