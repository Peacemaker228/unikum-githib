import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// controllers
import { AppController } from './app.controller';

// modules
import { CatalogModule } from './catalog/catalog.module';
import { CustomDesignModule } from './custom-design/custom-design.module';
import { ContactsModule } from './contacts/contacts.module';
import { GalleryModule } from './gallery/gallery.module';
import { PriceListModule } from './price-list/price-list.module';

import Next from 'next';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
    }),
    RenderModule.forRootAsync(
      Next({ dev: process.env.mode == 'development' }),
      { viewsDir: null },
    ),
    CatalogModule,
    CustomDesignModule,
    ContactsModule,
    GalleryModule,
    PriceListModule,
  ],
  controllers: [AppController]
})
export class AppModule { }
