
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/model/user/user';
import { UserPort } from '@model/user/user.port';
import { USER_SQL_REPOSITORY, USER_MONGO_REPOSITORY, USER_HTTP_REPOSITORY } from '@model/user/user.port';
import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { CrudUseCase } from '@domain/shared/crud.usecase.service';

@Injectable()
export class UserUseCase extends CrudUseCase<User, UserPort> {

    constructor(
        @Inject(USER_SQL_REPOSITORY) private userRepository: UserPort,
        private loggerService: CustomLoggerService
    ) {
        super(userRepository)
        this.loggerService.setContext(UserUseCase.name)
        this.loggerService.log('init UserUseCase')
    }



}