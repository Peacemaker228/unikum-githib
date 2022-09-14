import {
  Controller,
  Get,
  Logger,
  Param,
  Render,
  UseInterceptors,
} from '@nestjs/common';

import { ParamsInterceptor } from '../../common/interceptors/params.interceptor';

@Controller('design')
export class NextDesignController {
  constructor() {}

  @Get()
  @Render('design')
  design() {
    return {};  
  }

  @Get(':id')
  @Render('posts/[id]')
  @UseInterceptors(ParamsInterceptor)
  postsId() {
    return {};
  }
}
