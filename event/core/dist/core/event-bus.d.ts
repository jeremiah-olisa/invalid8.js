import { IEventBus } from '../interfaces';
import { Event, EventHandler } from '../types';
export declare abstract class BaseEventBus implements IEventBus {
    protected connected: boolean;
    protected adapterName: string;
    constructor(adapterName: string);
    abstract publish(event: Event): Promise<void>;
    abstract subscribe(eventType: string, handler: EventHandler): Promise<void>;
    abstract unsubscribe(eventType: string, handler: EventHandler): Promise<void>;
    abstract connect(): Promise<void>;
    abstract disconnect(): Promise<void>;
    isConnected(): boolean;
    getAdapterName(): string;
}
//# sourceMappingURL=event-bus.d.ts.map