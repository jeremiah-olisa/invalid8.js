"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invalid8 = void 0;
const query_client_1 = require("./query-client");
class Invalid8 {
    constructor(adapter, options) {
        this.adapter = adapter;
        this.queryClient = new query_client_1.QueryClient(adapter, options);
    }
    async connect() {
        await this.adapter.connect();
    }
    async disconnect() {
        await this.adapter.disconnect();
    }
    getQueryClient() {
        return this.queryClient;
    }
    getAdapter() {
        return this.adapter;
    }
}
exports.Invalid8 = Invalid8;
//# sourceMappingURL=invalid8.js.map