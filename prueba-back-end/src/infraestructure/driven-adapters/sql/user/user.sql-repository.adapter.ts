import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { Injectable, Scope } from '@nestjs/common';
import { UserPort } from '@model/user/user.port';
import { User } from '@model/user/user';
import { UserEntity } from './user.sql.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable({
    scope: Scope.DEFAULT
})
export class UserRepositoryAdapter implements UserPort {

    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        private loggerService: CustomLoggerService
    ) {
        this.loggerService.setContext(UserRepositoryAdapter.name);
        this.loggerService.log('init UserSQLRepositoryAdapter');
    }

    save(user: User): Promise<User> {
        const userEntity = new UserEntity(user.id, user.name, user.surname, user.age);
        return userEntity.save();
    }


    update(id: number | string, user: User): Promise<User> {
        const userEntity = new UserEntity(user.id, user.name, user.surname, user.age);
        // userEntity.updateAt = new Date();
        return userEntity.save();
    }

    delete(user: User): Promise<User> {
        const userEntity = new UserEntity(user.id, null, null, null);
        return userEntity.remove();
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findById(id: string | number): Promise<User> {
        // return this.userRepository.findById(new Types.ObjectId(id)).exec();
        throw new Error('Method not implemented.');
    }
}
