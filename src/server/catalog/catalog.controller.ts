import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  ParseIntPipe,
} from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  @Render('catalog')
  catalog() {
    return {};
  }

  @Get(':id')
  @Render('catalog/[id]')
  catalogItem(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
