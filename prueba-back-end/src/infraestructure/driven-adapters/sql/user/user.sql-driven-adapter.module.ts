import { LoggerModule } from './../../../../shared/logger/logger.module';
import { User } from '@model/user/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USER_SQL_REPOSITORY } from '@model/user/user.port';
import { UserRepositoryAdapter } from './user.sql-repository.adapter';
import { UserEntity } from './user.sql.entity';

const providers = [
    { provide: USER_SQL_REPOSITORY, useClass: UserRepositoryAdapter }
];

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        LoggerModule
    ],
    providers: [...providers],
    exports: [...providers, TypeOrmModule]
})
export class UserDrivenAdapterModule { }