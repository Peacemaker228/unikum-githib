import {
  Controller,
  Get,
  Logger,
  Param,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { ParamsInterceptor } from '../../common/interceptors/params.interceptor';

@Controller('posts')
export class NextPostsController {
  constructor() {}

  @Get()
  @Render('posts')
  posts() {
    return {};
  }

  @Get(':id')
  @Render('posts/[id]')
  @UseInterceptors(ParamsInterceptor)
  postsId() {
    return {};
  }
}
