import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { NextPostsController } from './controllers/next-posts.controller';

@Module({
  controllers: [PostsController, NextPostsController],
  providers: [PostsService],
})
export class PostsModule {}
