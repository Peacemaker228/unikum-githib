import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { ServicesPageModule } from './services-page/services-page.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
    }),
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    CatalogModule,
    CustomDesignModule,
    ContactsModule,
    GalleryModule,
    PriceListModule,
    ServicesPageModule
  ],
  providers: [ConfigService],
  controllers: [AppController],
})
export class AppModule {}
