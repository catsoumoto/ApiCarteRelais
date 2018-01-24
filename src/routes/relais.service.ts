export class RelaisService {

    constructor() {
    }

    public enable = (_req, res) => {
        console.log("enabled");
        res.status(200).json("enabled");
    };

    public disable = (_req, res) => {
        console.log("disabled");
        res.status(200).json("disabled");
    };
}