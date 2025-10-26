import { ICacheAdapter } from '../interfaces';
import { QueryClient } from './query-client';
export declare class Invalid8 {
    private queryClient;
    private adapter;
    constructor(adapter: ICacheAdapter, options?: {
        cacheTime?: number;
        staleTime?: number;
    });
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getQueryClient(): QueryClient;
    getAdapter(): ICacheAdapter;
}
//# sourceMappingURL=invalid8.d.ts.map