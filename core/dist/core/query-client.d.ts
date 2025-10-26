import { ICacheAdapter, IQueryClient } from '../interfaces';
import { CacheKey, InvalidationOptions, QueryOptions } from '../types';
export declare class QueryClient implements IQueryClient {
    private adapter;
    private defaultCacheTime;
    private defaultStaleTime;
    constructor(adapter: ICacheAdapter, options?: {
        cacheTime?: number;
        staleTime?: number;
    });
    query<T>(key: CacheKey, fetcher: () => Promise<T>, options?: QueryOptions<T>): Promise<T>;
    invalidate(key: CacheKey, options?: InvalidationOptions): Promise<void>;
    setQueryData<T>(key: CacheKey, data: T): Promise<void>;
    getQueryData<T>(key: CacheKey): Promise<T | null>;
    clear(): Promise<void>;
    private serializeKey;
    private isFresh;
}
//# sourceMappingURL=query-client.d.ts.map