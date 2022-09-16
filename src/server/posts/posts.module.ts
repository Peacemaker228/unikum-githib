import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { NextPostsController } from './controllers/next-posts.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [PostsController, NextPostsController],
  providers: [PostsService, ConfigService],
})
export class PostsModule {}
