"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClient = void 0;
const types_1 = require("../types");
class QueryClient {
    constructor(adapter, options) {
        this.adapter = adapter;
        this.defaultCacheTime = options?.cacheTime ?? 5 * 60 * 1000;
        this.defaultStaleTime = options?.staleTime ?? 0;
    }
    async query(key, fetcher, options) {
        const cacheKey = this.serializeKey(key);
        const cached = await this.adapter.get(cacheKey);
        if (cached && this.isFresh(cached, options?.staleTime ?? this.defaultStaleTime)) {
            return cached.data;
        }
        try {
            const data = await fetcher();
            const cacheTime = options?.cacheTime ?? this.defaultCacheTime;
            const entry = {
                key: cacheKey,
                data,
                status: types_1.CacheStatus.SUCCESS,
                timestamp: new Date(),
                expiresAt: new Date(Date.now() + cacheTime),
            };
            await this.adapter.set(cacheKey, entry);
            options?.onSuccess?.(data);
            return data;
        }
        catch (error) {
            options?.onError?.(error);
            throw error;
        }
    }
    async invalidate(key, options) {
        const cacheKey = this.serializeKey(key);
        await this.adapter.delete(cacheKey);
    }
    async setQueryData(key, data) {
        const cacheKey = this.serializeKey(key);
        const entry = {
            key: cacheKey,
            data,
            status: types_1.CacheStatus.SUCCESS,
            timestamp: new Date(),
            expiresAt: new Date(Date.now() + this.defaultCacheTime),
        };
        await this.adapter.set(cacheKey, entry);
    }
    async getQueryData(key) {
        const cacheKey = this.serializeKey(key);
        const cached = await this.adapter.get(cacheKey);
        return cached ? cached.data : null;
    }
    async clear() {
        await this.adapter.clear();
    }
    serializeKey(key) {
        return JSON.stringify(key.queryKey);
    }
    isFresh(entry, staleTime) {
        const age = Date.now() - entry.timestamp.getTime();
        return age < staleTime;
    }
}
exports.QueryClient = QueryClient;
//# sourceMappingURL=query-client.js.map