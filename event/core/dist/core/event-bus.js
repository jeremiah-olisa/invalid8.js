"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEventBus = void 0;
class BaseEventBus {
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
exports.BaseEventBus = BaseEventBus;
//# sourceMappingURL=event-bus.js.map