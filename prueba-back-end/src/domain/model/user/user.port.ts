import { User } from './user';
import { CrudRepository } from '@domain/shared/crud';

export interface UserPort extends CrudRepository<User> {}

export const USER_SQL_REPOSITORY = 'ROOLE_SQL_REPOSITORY';
export const USER_MONGO_REPOSITORY = 'ROOLE_MONGO_REPOSITORY';
export const USER_HTTP_REPOSITORY = 'USER_HTTP_REPOSITORY';
