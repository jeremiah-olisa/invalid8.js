"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }
    emit(eventType, data) {
        const handlers = this.listeners.get(eventType);
        if (handlers) {
            const event = {
                id: this.generateEventId(),
                type: eventType,
                data,
                timestamp: new Date(),
            };
            handlers.forEach((handler) => {
                try {
                    handler(event);
                }
                catch (error) {
                    console.error(`Error in event handler for ${eventType}:`, error);
                }
            });
        }
    }
    on(eventType, handler) {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, new Set());
        }
        this.listeners.get(eventType)?.add(handler);
    }
    once(eventType, handler) {
        const onceHandler = (event) => {
            handler(event);
            this.off(eventType, onceHandler);
        };
        this.on(eventType, onceHandler);
    }
    off(eventType, handler) {
        const handlers = this.listeners.get(eventType);
        if (handlers) {
            handlers.delete(handler);
            if (handlers.size === 0) {
                this.listeners.delete(eventType);
            }
        }
    }
    removeAllListeners(eventType) {
        if (eventType) {
            this.listeners.delete(eventType);
        }
        else {
            this.listeners.clear();
        }
    }
    generateEventId() {
        return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=event-emitter.js.map