import { Controller, Get, Render } from '@nestjs/common';

@Controller('custom-design')
export class NextCustomDesignController {
    @Get("/")
    @Render("custom-design")
    getIndexDesignPage() {
        return {}
    }
}
