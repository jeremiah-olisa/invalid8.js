import { BaseEventBus, Event, EventHandler, KafkaConfig } from '@eventbus/core';
export declare class KafkaEventBus extends BaseEventBus {
    private config;
    private handlers;
    constructor(config: KafkaConfig);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    publish(_event: Event): Promise<void>;
    subscribe(eventType: string, handler: EventHandler): Promise<void>;
    unsubscribe(eventType: string, handler: EventHandler): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map