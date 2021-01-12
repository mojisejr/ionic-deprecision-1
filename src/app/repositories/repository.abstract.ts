export abstract class Repository<T> {
    abstract save(data: T);
    abstract loadCollection(): T[] | Promise<T[]>;
}