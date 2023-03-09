import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TaskController } from './task/task.controller';
import helmet from 'helmet';
import { AuthzModule } from './authz/authz.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
    AuthzModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes(TaskController);
  }
}
