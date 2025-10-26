"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCacheAdapter = void 0;
const core_1 = require("@invalid8/core");
class MemoryCacheAdapter extends core_1.BaseCacheAdapter {
    constructor() {
        super('memory');
        this.cache = new Map();
    }
    async connect() {
        this.connected = true;
    }
    async disconnect() {
        this.cache.clear();
        this.connected = false;
    }
    async get(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return null;
        }
        if (entry.expiresAt && entry.expiresAt < new Date()) {
            await this.delete(key);
            return null;
        }
        return entry;
    }
    async set(key, entry) {
        this.cache.set(key, entry);
    }
    async delete(key) {
        this.cache.delete(key);
    }
    async clear() {
        this.cache.clear();
    }
    async has(key) {
        return this.cache.has(key);
    }
    async keys() {
        return Array.from(this.cache.keys());
    }
}
exports.MemoryCacheAdapter = MemoryCacheAdapter;
//# sourceMappingURL=index.js.map