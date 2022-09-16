import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  @Render('index')
  home() {
    return {};
  }
}
