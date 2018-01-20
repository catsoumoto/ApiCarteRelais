"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RelaisService = /** @class */ (function () {
    function RelaisService() {
        this.active = function (_req, res) {
            console.log("active");
            res.status(200).json("OK");
        };
    }
    return RelaisService;
}());
exports.RelaisService = RelaisService;
//# sourceMappingURL=relais.service.js.map