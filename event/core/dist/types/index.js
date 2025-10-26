"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStatus = exports.EventPriority = void 0;
var EventPriority;
(function (EventPriority) {
    EventPriority["LOW"] = "low";
    EventPriority["NORMAL"] = "normal";
    EventPriority["HIGH"] = "high";
    EventPriority["CRITICAL"] = "critical";
})(EventPriority || (exports.EventPriority = EventPriority = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["PENDING"] = "pending";
    EventStatus["PUBLISHED"] = "published";
    EventStatus["DELIVERED"] = "delivered";
    EventStatus["FAILED"] = "failed";
})(EventStatus || (exports.EventStatus = EventStatus = {}));
//# sourceMappingURL=index.js.map