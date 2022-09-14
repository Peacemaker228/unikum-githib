import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesignService } from '../services/design.sevice';

@Controller('api/v1/design')
export class DesignController {
  constructor(private readonly designService: DesignService) {}

  @Get()
  findAll() {
    return this.designService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designService.remove(+id);
  }
}
