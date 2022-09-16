import { Controller, Get, Render } from '@nestjs/common';


@Controller('gallery')
export class NextGalleryController {
    @Get()
    @Render("gallery")
    getGallery() {
        return {}
    }
}
