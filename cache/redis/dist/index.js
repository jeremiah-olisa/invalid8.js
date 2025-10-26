"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheAdapter = void 0;
const core_1 = require("@invalid8/core");
class RedisCacheAdapter extends core_1.BaseCacheAdapter {
    constructor(config) {
        super('redis');
        this.config = config;
        this.cache = new Map();
    }
    async connect() {
        console.warn('Redis adapter: connect() is not fully implemented');
        this.connected = true;
    }
    async disconnect() {
        console.warn('Redis adapter: disconnect() is not fully implemented');
        this.cache.clear();
        this.connected = false;
    }
    async get(key) {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        const entry = this.cache.get(key);
        return entry ? entry : null;
    }
    async set(key, entry) {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        this.cache.set(key, entry);
    }
    async delete(key) {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        this.cache.delete(key);
    }
    async clear() {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        this.cache.clear();
    }
    async has(key) {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        return this.cache.has(key);
    }
    async keys() {
        if (!this.connected) {
            throw new Error('Redis adapter is not connected');
        }
        return Array.from(this.cache.keys());
    }
}
exports.RedisCacheAdapter = RedisCacheAdapter;
//# sourceMappingURL=index.js.map