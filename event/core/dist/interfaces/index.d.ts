import { Event, EventHandler } from '../types';
export interface IEventBus {
    publish(event: Event): Promise<void>;
    subscribe(eventType: string, handler: EventHandler): Promise<void>;
    unsubscribe(eventType: string, handler: EventHandler): Promise<void>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    getAdapterName(): string;
}
export interface IEventEmitter {
    emit(eventType: string, data: unknown): void;
    on(eventType: string, handler: EventHandler): void;
    once(eventType: string, handler: EventHandler): void;
    off(eventType: string, handler: EventHandler): void;
    removeAllListeners(eventType?: string): void;
}
export interface EventBusConfig {
    adapter: 'memory' | 'rabbitmq' | 'kafka';
    options?: Record<string, unknown>;
}
export interface RabbitMQConfig extends EventBusConfig {
    adapter: 'rabbitmq';
    options: {
        url: string;
        exchange?: string;
        exchangeType?: string;
        durable?: boolean;
    };
}
export interface KafkaConfig extends EventBusConfig {
    adapter: 'kafka';
    options: {
        brokers: string[];
        clientId?: string;
        groupId?: string;
    };
}
//# sourceMappingURL=index.d.ts.map