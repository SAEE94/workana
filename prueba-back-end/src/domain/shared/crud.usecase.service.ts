
import { Injectable } from '@nestjs/common';
import { CrudRepository } from './crud';


@Injectable()
export class CrudUseCase<T, R extends CrudRepository<T>> implements CrudRepository<T>{

  constructor(
    private crudRepository: R
  ) { }

  save(t: T): Promise<T> {
    return this.crudRepository.save(t);
  }

  update(id: number | string, t: T): Promise<T> {
    return this.crudRepository.update(id, t);
  }

  delete(t: T): Promise<T> {
    return this.crudRepository.delete(t)
  }

  findAll(): Promise<T[]> {
    return this.crudRepository.findAll();
  }

  findById(id: string | number): Promise<T> {
    return this.crudRepository.findById(id);
  }

}
