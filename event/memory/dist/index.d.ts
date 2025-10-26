import { BaseEventBus, Event, EventHandler } from '@eventbus/core';
export declare class MemoryEventBus extends BaseEventBus {
    private handlers;
    constructor();
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    publish(event: Event): Promise<void>;
    subscribe(eventType: string, handler: EventHandler): Promise<void>;
    unsubscribe(eventType: string, handler: EventHandler): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map