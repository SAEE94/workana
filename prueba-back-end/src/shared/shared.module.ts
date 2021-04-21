import { LoggerModule } from './logger/logger.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { AppMiddleware } from './middleware/app.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.development.env'] }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    LoggerModule,
  ],
  providers: [AppMiddleware],
  exports: [AppMiddleware, TypeOrmModule],
})
export class SharedModule {}
