import { Controller, Get, Param, Render, ParseIntPipe } from '@nestjs/common';
import { CatalogService } from '../services/catalog.service';

@Controller('catalog')
export class NextCatalogController {
    constructor(private readonly catalogService: CatalogService) { }

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
