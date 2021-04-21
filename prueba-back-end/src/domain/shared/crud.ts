export interface CrudRepository<T> {
     save(t: T): Promise<T>;
     update(id: number | string, t: T): Promise<T>;
     delete(t: T): Promise<T>;
     findAll(): Promise<T[]>;
     findById( id: string | number ): Promise<T>;
}