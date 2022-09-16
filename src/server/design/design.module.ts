import { Module } from '@nestjs/common';
import { DesignService } from './services/design.sevice';
import { DesignController } from './controllers/design.controller';
import { NextDesignController } from './controllers/next-design.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [DesignController, NextDesignController],
  providers: [DesignService, ConfigService],
})
export class DesignModule {}
