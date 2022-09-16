import { Controller } from '@nestjs/common';
import { GalleryService } from '../services/gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}
}
