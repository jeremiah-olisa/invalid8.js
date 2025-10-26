"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaEventBus = void 0;
const core_1 = require("@eventbus/core");
class KafkaEventBus extends core_1.BaseEventBus {
    constructor(config) {
        super('kafka');
        this.config = config;
        this.handlers = new Map();
    }
    async connect() {
        console.warn('Kafka adapter: connect() is not fully implemented');
        this.connected = true;
    }
    async disconnect() {
        console.warn('Kafka adapter: disconnect() is not fully implemented');
        this.handlers.clear();
        this.connected = false;
    }
    async publish(_event) {
        if (!this.connected) {
            throw new Error('Kafka event bus is not connected');
        }
        console.warn('Kafka adapter: publish() is not fully implemented');
    }
    async subscribe(eventType, handler) {
        if (!this.connected) {
            throw new Error('Kafka event bus is not connected');
        }
        if (!this.handlers.has(eventType)) {
            this.handlers.set(eventType, new Set());
        }
        this.handlers.get(eventType)?.add(handler);
        console.warn('Kafka adapter: subscribe() is not fully implemented');
    }
    async unsubscribe(eventType, handler) {
        const handlers = this.handlers.get(eventType);
        if (handlers) {
            handlers.delete(handler);
            if (handlers.size === 0) {
                this.handlers.delete(eventType);
            }
        }
        console.warn('Kafka adapter: unsubscribe() is not fully implemented');
    }
}
exports.KafkaEventBus = KafkaEventBus;
//# sourceMappingURL=index.js.map