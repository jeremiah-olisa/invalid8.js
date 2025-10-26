import { ICacheAdapter } from '../interfaces';
import { CacheEntry } from '../types';
export declare abstract class BaseCacheAdapter implements ICacheAdapter {
    protected connected: boolean;
    protected adapterName: string;
    constructor(adapterName: string);
    abstract get<T>(key: string): Promise<CacheEntry<T> | null>;
    abstract set<T>(key: string, entry: CacheEntry<T>): Promise<void>;
    abstract delete(key: string): Promise<void>;
    abstract clear(): Promise<void>;
    abstract has(key: string): Promise<boolean>;
    abstract keys(): Promise<string[]>;
    abstract connect(): Promise<void>;
    abstract disconnect(): Promise<void>;
    isConnected(): boolean;
    getAdapterName(): string;
}
//# sourceMappingURL=base-cache-adapter.d.ts.map