import { Module } from '@nestjs/common';
import { CatalogService } from './services/catalog.service';
import { CatalogController } from './controllers/catalog.controller';
import { NextCatalogController } from './controllers/next-catalog.controller';


@Module({
  controllers: [CatalogController, NextCatalogController],
  providers: [CatalogService],
})
export class CatalogModule { }
