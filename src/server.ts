import * as  bodyParser from "body-parser";
import * as express from "express";

import { RelaisService } from "./routes/relais.service";

export class Server {
    public app: express.Application;
    public relaisService: RelaisService;

    constructor() {
        this.app = express();
        this.app.use( bodyParser.json() );
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

        this.app.use((_req, res, next) => {
            res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Max-Age", "86400");
            next();
        });

        this.app.use((err, _req, res, next) => {
            res.status(err.status || 500);
            res.json({
                error: err,
                message: err.message,
            });
            next(err);
        });

        this.relaisService = new RelaisService();
    }

    public start() {
        this.initRoutes();
        this.app.listen(9999);
        console.log("Listening on port 9999...");
    }

    public initRoutes() {
        let router: express.Router;
        router = express.Router();
        router.get("/relais/enable", this.relaisService.enable);
        router.get("/relais/disable", this.relaisService.disable);
        this.app.use(router);
    }
}
