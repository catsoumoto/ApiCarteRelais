import * as  bodyParser from "body-parser";
import * as timeout from "connect-timeout";
import * as express from "express";

import { RelaisService } from "./routes/relais.service";

export class Server {
    public app: express.Application;
    public relaisService: RelaisService;

    constructor() {
        this.app = express();
        this.app.use(timeout("60s"));
        this.app.use( bodyParser.json() );
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

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
        router.get("/relais/active", this.relaisService.active);
    }
}
