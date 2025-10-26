import { BaseCacheAdapter, CacheEntry, RedisConfig } from '@invalid8/core';
export declare class RedisCacheAdapter extends BaseCacheAdapter {
    private config;
    private cache;
    constructor(config: RedisConfig);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    get<T>(key: string): Promise<CacheEntry<T> | null>;
    set<T>(key: string, entry: CacheEntry<T>): Promise<void>;
    delete(key: string): Promise<void>;
    clear(): Promise<void>;
    has(key: string): Promise<boolean>;
    keys(): Promise<string[]>;
}
//# sourceMappingURL=index.d.ts.map