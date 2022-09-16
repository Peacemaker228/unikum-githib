import { Controller, Get, Render } from '@nestjs/common';

@Controller('price-list')
export class NextPriceListController {
    @Get()
    @Render("price-list")
    getPriceList() {
        return {}
    }
}
