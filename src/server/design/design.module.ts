import { Module } from '@nestjs/common';
import { DesignService } from './services/design.sevice';
import { DesignController } from './controllers/design.controller';
import { NextDesignController } from './controllers/next-design.controller';

@Module({
  controllers: [DesignController, NextDesignController],
  providers: [DesignService],
})
export class DesignModule {}
