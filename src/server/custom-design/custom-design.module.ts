import { Module } from '@nestjs/common';
import { CustomDesignService } from './services/custom-design.service';
import { CustomDesignController } from './controllers/custom-design.controller';
import { NextCustomDesignController } from './controllers/next-custom-design.controller';

@Module({
  controllers: [CustomDesignController, NextCustomDesignController],
  providers: [CustomDesignService]
})
export class CustomDesignModule { }
