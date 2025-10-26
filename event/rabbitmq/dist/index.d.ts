import { BaseEventBus, Event, EventHandler, RabbitMQConfig } from '@eventbus/core';
export declare class RabbitMQEventBus extends BaseEventBus {
    private config;
    private handlers;
    constructor(config: RabbitMQConfig);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    publish(_event: Event): Promise<void>;
    subscribe(eventType: string, handler: EventHandler): Promise<void>;
    unsubscribe(eventType: string, handler: EventHandler): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map