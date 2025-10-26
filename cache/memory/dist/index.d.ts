import { BaseCacheAdapter, CacheEntry } from '@invalid8/core';
export declare class MemoryCacheAdapter extends BaseCacheAdapter {
    private cache;
    constructor();
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