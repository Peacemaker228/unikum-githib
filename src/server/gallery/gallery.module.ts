import { Module } from '@nestjs/common';
import { GalleryService } from './services/gallery.service';
import { GalleryController } from './controllers/gallery.controller';
import { NextGalleryController } from './controllers/next-gallery.controller';

@Module({
  controllers: [GalleryController, NextGalleryController],
  providers: [GalleryService]
})
export class GalleryModule { }
