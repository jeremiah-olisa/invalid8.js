export declare enum CacheStatus {
    IDLE = "idle",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
    STALE = "stale"
}
export declare enum InvalidationType {
    MANUAL = "manual",
    TIMEOUT = "timeout",
    EVENT = "event",
    DEPENDENCY = "dependency"
}
export interface CacheKey {
    queryKey: readonly unknown[];
}
export interface CacheMetadata {
    [key: string]: any;
}
export interface CacheEntry<T = any> {
    key: string;
    data: T;
    status: CacheStatus;
    timestamp: Date;
    expiresAt?: Date;
    metadata?: CacheMetadata;
}
export interface QueryOptions<T = any> {
    cacheTime?: number;
    staleTime?: number;
    retry?: boolean | number;
    retryDelay?: number;
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
}
export interface InvalidationOptions {
    type?: InvalidationType;
    broadcast?: boolean;
}
//# sourceMappingURL=index.d.ts.map