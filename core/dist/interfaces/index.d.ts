import { CacheEntry, CacheKey, InvalidationOptions, QueryOptions } from '../types';
export interface ICacheAdapter {
    get<T>(key: string): Promise<CacheEntry<T> | null>;
    set<T>(key: string, entry: CacheEntry<T>): Promise<void>;
    delete(key: string): Promise<void>;
    clear(): Promise<void>;
    has(key: string): Promise<boolean>;
    keys(): Promise<string[]>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    getAdapterName(): string;
}
export interface IQueryClient {
    query<T>(key: CacheKey, fetcher: () => Promise<T>, options?: QueryOptions<T>): Promise<T>;
    invalidate(key: CacheKey, options?: InvalidationOptions): Promise<void>;
    setQueryData<T>(key: CacheKey, data: T): Promise<void>;
    getQueryData<T>(key: CacheKey): Promise<T | null>;
    clear(): Promise<void>;
}
export interface Invalid8Config {
    adapter: 'memory' | 'redis';
    defaultCacheTime?: number;
    defaultStaleTime?: number;
    options?: Record<string, unknown>;
}
export interface RedisConfig extends Invalid8Config {
    adapter: 'redis';
    options: {
        host: string;
        port?: number;
        password?: string;
        db?: number;
    };
}
//# sourceMappingURL=index.d.ts.map