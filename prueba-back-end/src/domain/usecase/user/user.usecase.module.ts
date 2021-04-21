import { LoggerModule } from '../../../shared/logger/logger.module';
import { Module } from '@nestjs/common';
import { UserUseCase } from './user.usecase';
import { UserDrivenAdapterModule } from '@driven-adapter/sql/user/user.sql-driven-adapter.module';


@Module({
    imports: [
        UserDrivenAdapterModule,
        LoggerModule
    ],
    providers: [UserUseCase],
    exports: [UserUseCase]
})
export class UserUseCaseModule { }
