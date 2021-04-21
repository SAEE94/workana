import { LoggerModule } from '@shared/logger/logger.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserUseCaseModule } from '@usecase/user/user.usecase.module';
import { AppMiddleware } from '@shared/middleware/app.middleware';
import { UserController } from './user.controller';

@Module({
    imports: [UserUseCaseModule, LoggerModule],
    controllers: [UserController]
})
export class UserEntryPointModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AppMiddleware)
            .forRoutes(UserController);
    }
}