"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var relais_service_1 = require("./routes/relais.service");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use(function (_req, res, next) {
            console.log(_req.body);
            res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Max-Age", "86400");
            next();
        });
        this.app.use(function (err, _req, res, next) {
            res.status(err.status || 500);
            res.json({
                error: err,
                message: err.message,
            });
            next(err);
        });
        this.relaisService = new relais_service_1.RelaisService();
    }
    Server.prototype.start = function () {
        this.initRoutes();
        this.app.listen(9999);
        console.log("Listening on port 9999...");
    };
    Server.prototype.initRoutes = function () {
        var router;
        router = express.Router();
        router.get("/relais/active", this.relaisService.active);
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map