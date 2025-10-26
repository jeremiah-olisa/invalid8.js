import { IEventEmitter } from '../interfaces';
import { EventHandler } from '../types';
export declare class EventEmitter implements IEventEmitter {
    private listeners;
    constructor();
    emit(eventType: string, data: unknown): void;
    on(eventType: string, handler: EventHandler): void;
    once(eventType: string, handler: EventHandler): void;
    off(eventType: string, handler: EventHandler): void;
    removeAllListeners(eventType?: string): void;
    private generateEventId;
}
//# sourceMappingURL=event-emitter.d.ts.map