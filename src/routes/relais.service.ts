export class RelaisService {

    constructor() {
    }

    public active = (_req, res) => {
        res.status(200).json("OK");
    };
}