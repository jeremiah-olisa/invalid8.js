"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryEventBus = void 0;
const core_1 = require("@eventbus/core");
class MemoryEventBus extends core_1.BaseEventBus {
    constructor() {
        super('memory');
        this.handlers = new Map();
    }
    async connect() {
        this.connected = true;
    }
    async disconnect() {
        this.handlers.clear();
        this.connected = false;
    }
    async publish(event) {
        const handlers = this.handlers.get(event.type);
        if (handlers) {
            const promises = Array.from(handlers).map(async (handler) => {
                try {
                    await handler(event);
                }
                catch (error) {
                    console.error(`Error handling event ${event.type}:`, error);
                }
            });
            await Promise.all(promises);
        }
    }
    async subscribe(eventType, handler) {
        if (!this.handlers.has(eventType)) {
            this.handlers.set(eventType, new Set());
        }
        this.handlers.get(eventType)?.add(handler);
    }
    async unsubscribe(eventType, handler) {
        const handlers = this.handlers.get(eventType);
        if (handlers) {
            handlers.delete(handler);
            if (handlers.size === 0) {
                this.handlers.delete(eventType);
            }
        }
    }
}
exports.MemoryEventBus = MemoryEventBus;
//# sourceMappingURL=index.js.map