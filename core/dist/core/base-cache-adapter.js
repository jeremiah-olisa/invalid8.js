"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCacheAdapter = void 0;
class BaseCacheAdapter {
    constructor(adapterName) {
        this.connected = false;
        this.adapterName = adapterName;
    }
    isConnected() {
        return this.connected;
    }
    getAdapterName() {
        return this.adapterName;
    }
}
exports.BaseCacheAdapter = BaseCacheAdapter;
//# sourceMappingURL=base-cache-adapter.js.map