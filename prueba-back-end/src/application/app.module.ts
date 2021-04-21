import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { LoggerModule } from '@shared/logger/logger.module';
import { SharedModule } from '@shared/shared.module';

import { UserEntryPointModule } from '@infraestructure/entry-points/user/user.entry-point.module';

@Module({
  imports: [UserEntryPointModule, SharedModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
